/*
被加载时候componentDidMount添加全局方法：
$addSnackbar(state,id)，state格式请参照官方API说明,必须通过id才能自定义关闭snackbar的按钮
$closeMySnackBar(id)，关闭特定的snackbar
*/
import React from 'react'
import h from 'react-hyperscript'
import deepmerge from 'deepmerge'

import Snackbar from '@material-ui/core/Snackbar';

let snackbars = {} //全部snackbar实例列表，关闭snackbar时候使用

//输出关闭特定snackbar的全局方法
global.$closeMySnackBar = (id) => {
    if (snackbars[id]) {
        snackbars[id].setState({
            open: false
        })
    }
}

/*
自动接收snackbar管理的类
能够自动计时关闭
*/
class MySnackbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }

    componentDidMount() {
        if (this.props.id) {
            snackbars[this.props.id] = this
        }
    }

    render() {
        let props = deepmerge(this.props, {
            open: this.state.open,
            style: {
                display: 'block',
                position: 'relative',
                height: 56,
            },
            onClose: (event, reason) => {
                this.props.onClose && this.props.onClose()
                if (reason !== 'clickaway') this.setState({
                    open: false
                })
            },
        })
        return h(Snackbar, props)
    }
}

//App中所有snackbar的容器管理
class MySnackbars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    add(state, id) {
        let newOne = h(MySnackbar, deepmerge(state, {
            open: true,
            id: id //关闭snackbar时候使用
        }))
        this.state.list.push(newOne)
        this.setState({
            list: this.state.list
        })
    }

    componentDidMount() {
        let that = this;
        global.$addMySnackbar = (state, id) => {
            that.add(state, id)
        }
    }

    render() {
        //嵌套两层div把所有snackbar固定
        return h('div', {
            style: {
                bottom:40,
                left:20,
                position: 'fixed',
                textAlign: 'right',
                width: 300,
                zIndex:99999
            }
        }, [
            h('div', {
                style: {
                    display: 'inline-block',
                }
            }, this.state.list)
        ])
    }
}

export default MySnackbars