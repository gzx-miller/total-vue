import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const h = React.createElement
const courses = [
  { id: 'react', title: 'React 核心', level: '入门' },
  { id: 'hooks', title: 'Hooks 实战', level: '进阶' },
  { id: 'testing', title: 'React 测试', level: '进阶' },
  { id: 'design', title: '组件设计', level: '入门' },
]

function App() {
  const [keyword, setKeyword] = useState('')
  const visibleCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(keyword.trim().toLowerCase())
  )

  return h('main', { className: 'app' },
    h('header', null,
      h('p', { className: 'kicker' }, '列表渲染与稳定 Key'),
      h('h3', null, '课程检索'),
    ),
    h('input', {
      value: keyword,
      placeholder: '输入课程关键词',
      onChange: (event) => setKeyword(event.target.value),
    }),
    h('div', { className: 'grid' },
      visibleCourses.map((course) => h('article', { className: 'item', key: course.id },
        h('strong', null, course.title),
        h('span', { className: 'badge' }, course.level),
      )),
    ),
    h('p', { className: 'muted' }, `找到 ${visibleCourses.length} 门课程；筛选结果直接在渲染阶段计算。`),
  )
}

createRoot(document.getElementById('root')).render(h(App))
