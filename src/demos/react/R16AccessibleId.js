import React, { useId, useState } from 'react'
import { createRoot } from 'react-dom/client'

const h = React.createElement

function CourseField({ label }) {
  const id = useId()
  const hintId = `${id}-hint`
  return h('div', { className: 'field' },
    h('label', { htmlFor: id }, label),
    h('input', { id, 'aria-describedby': hintId, placeholder: `填写${label}` }),
    h('span', { id: hintId, className: 'muted' }, '标签、输入框和说明通过稳定 ID 建立关联。'),
  )
}

function App() {
  const [showSecond, setShowSecond] = useState(false)
  return h('main', { className: 'app' },
    h('header', null,
      h('p', { className: 'kicker' }, 'useId'),
      h('h3', null, '生成可访问性关联 ID'),
    ),
    h(CourseField, { label: '课程名称' }),
    showSecond ? h(CourseField, { label: '讲师姓名' }) : null,
    h('button', { className: 'secondary', onClick: () => setShowSecond((value) => !value) }, showSecond ? '移除讲师字段' : '增加讲师字段'),
  )
}

createRoot(document.getElementById('root')).render(h(App))
