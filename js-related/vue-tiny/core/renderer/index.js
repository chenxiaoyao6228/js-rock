export function diff(newTree, oldTree) {
  // tag
  if (newTree.tag !== oldTree.tag) {
    oldTree.el.replaceWith(document.createElement(newTree.tag))
  } else {
    newTree.el = oldTree.el
    // props, 对比两个对象, 各自遍历一遍,找出各自不同的地方
    let { props: newProps } = newTree
    let { props: oldProps } = oldTree
    if (newProps && oldProps) {
      Object.keys(newProps).forEach(key => {
        if (Object.hasOwnProperty.call(oldProps, key)) {
          let newVal = newProps[key]
          let oldValue = oldProps[key]
          if (newVal !== oldValue) {
            newTree.el.setAttribute(key, newVal)
          }
        }
      })
    }
    if (oldProps) {
      Object.keys(oldProps).forEach(key => {
        if (!Object.hasOwnProperty.call(newProps, key)) {
          newTree.el.removeAttribute(key)
        }
      })
    }
  }
  // children
  // [string, array] * [array, string] = 4种情况
  let { children: oldChildren } = oldTree
  let { children: newChildren } = newTree
  if (typeof newChildren === 'string') {
    if (typeof oldChildren === 'string') {
      if (newChildren !== oldChildren) {
        newTree.el.textContent = newChildren
      }
    } else if (isArray(oldChildren)) {
      newTree.el.textContent = newChildren
    }
  } else if (isArray(newChildren)) {
    if (typeof oldChildren === 'string') {
      newTree.el.textContent = ``
      mountElement(newTree, newTree.el)
    } else if (Array.isArray(oldChildren)) {
      // 暴力解法: 只对节点的长度作处理,不处理相同长度内的节点移位操作
      const length = Math.min(newChildren.length, oldChildren.length)
      // 更新相同长度的部分
      for (var index = 0; index < length; index++) {
        let newTree = newChildren[index]
        let oldTree = oldChildren[index]
        diff(newTree, oldTree)
      }
      // 创建
      if (newChildren.length > oldChildren.length) {
        for (let index = length; index < newChildren.length; index++) {
          const newVNode = newChildren[index]
          mountElement(newVNode, newTree.el)
        }
      }
      // 删除
      if (oldChildren.length > newChildren.length) {
        for (let index = length; index < oldChildren.length; index++) {
          const vNode = oldChildren[index]
          vNode.el.remove() // 节点移除自身
        }
      }
    }
  }
}

// vdom => dom
export function mountElement(vNode, container) {
  const { tag, props, children } = vNode
  // tag
  let ele = (vNode.el = document.createElement(tag))
  // props
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const value = props[key]
      ele.setAttribute(key, value)
    }
  }
  /* children
      1. string
      2. object
  */
  if (typeof children === 'string') {
    const textNode = document.createTextNode(children)
    ele.appendChild(textNode)
  } else if (isArray(children)) {
    children.forEach(vNode => {
      mountElement(vNode, ele)
    })
  }
  container.appendChild(ele)
}

function isArray(ele) {
  return typeof ele.sort === 'function'
}
