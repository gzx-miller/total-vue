import type { Component } from 'vue'
import K01AppEntry from '../demos/K01AppEntry.vue'
import K01Code from '../demos/K01AppEntry.vue?raw'
import K02TemplateSyntax from '../demos/K02TemplateSyntax.vue'
import K02Code from '../demos/K02TemplateSyntax.vue?raw'
import K03Reactivity from '../demos/K03Reactivity.vue'
import K03Code from '../demos/K03Reactivity.vue?raw'
import K04ComputedWatch from '../demos/K04ComputedWatch.vue'
import K04Code from '../demos/K04ComputedWatch.vue?raw'
import K05ConditionList from '../demos/K05ConditionList.vue'
import K05Code from '../demos/K05ConditionList.vue?raw'
import K06FormModel from '../demos/K06FormModel.vue'
import K06Code from '../demos/K06FormModel.vue?raw'
import K07ComponentBasics from '../demos/K07ComponentBasics.vue'
import K07Code from '../demos/K07ComponentBasics.vue?raw'
import K08Slots from '../demos/K08Slots.vue'
import K08Code from '../demos/K08Slots.vue?raw'
import K09Communication from '../demos/K09Communication.vue'
import K09Code from '../demos/K09Communication.vue?raw'
import K10LifecycleRef from '../demos/K10LifecycleRef.vue'
import K10Code from '../demos/K10LifecycleRef.vue?raw'
import K11Composable from '../demos/K11Composable.vue'
import K11Code from '../demos/K11Composable.vue?raw'
import K12Routing from '../demos/K12Routing.vue'
import K12Code from '../demos/K12Routing.vue?raw'
import K13Pinia from '../demos/K13Pinia.vue'
import K13Code from '../demos/K13Pinia.vue?raw'
import K14AsyncState from '../demos/K14AsyncState.vue'
import K14Code from '../demos/K14AsyncState.vue?raw'
import K15DynamicKeepAlive from '../demos/K15DynamicKeepAlive.vue'
import K15Code from '../demos/K15DynamicKeepAlive.vue?raw'
import K16Transition from '../demos/K16Transition.vue'
import K16Code from '../demos/K16Transition.vue?raw'
import K17Directive from '../demos/K17Directive.vue'
import K17Code from '../demos/K17Directive.vue?raw'
import K18Teleport from '../demos/K18Teleport.vue'
import K18Code from '../demos/K18Teleport.vue?raw'
import K19Suspense from '../demos/K19Suspense.vue'
import K19Code from '../demos/K19Suspense.vue?raw'
import K20Performance from '../demos/K20Performance.vue'
import K20Code from '../demos/K20Performance.vue?raw'
import K21TestingMaintainability from '../demos/K21TestingMaintainability.vue'
import K21Code from '../demos/K21TestingMaintainability.vue?raw'

export interface Lesson {
  id: `K_${number}`
  title: string
  navTitle: string
  category: string
  path: string
  summary: string
  demo: Component
  code: string
  language: string
  principle: string
  flow: string[]
  notes: string[]
  problem: string
}

export const lessons: Lesson[] = [
  {
    id: 'K_1',
    title: '应用创建、入口挂载、SFC 基础结构',
    navTitle: 'K_1 应用入口',
    category: '工程起点',
    path: '/k-1/app-entry',
    summary: '从入口文件理解 Vue 应用实例、插件注册和单文件组件的基本组成。',
    demo: K01AppEntry,
    code: K01Code,
    language: 'vue',
    principle: 'Vue3 应用从 createApp 开始，插件通过 use 注册，根组件通过 mount 接管页面中的挂载点。',
    flow: ['创建应用实例', '注册 Router 和 Pinia 等插件', '挂载根组件并渲染页面'],
    notes: ['入口文件保持清晰，不放业务逻辑', 'SFC 通常由 script、template、style 三部分组成'],
    problem: '解决项目从哪里启动、全局能力在哪里接入的问题。',
  },
  {
    id: 'K_2',
    title: '模板语法、插值、指令、事件绑定',
    navTitle: 'K_2 模板语法',
    category: '模板基础',
    path: '/k-2/template-syntax',
    summary: '用订单搜索展示插值、v-model、v-if、v-for、属性绑定和事件绑定。',
    demo: K02TemplateSyntax,
    code: K02Code,
    language: 'vue',
    principle: '模板把响应式状态声明式映射成 DOM，指令负责常见的条件、列表、绑定和事件场景。',
    flow: ['输入关键词更新状态', '计算过滤结果', '模板根据结果渲染提示和列表'],
    notes: ['v-for 必须提供稳定 key', '复杂表达式优先放到 computed 或方法中'],
    problem: '解决如何用少量声明式模板完成常见交互的问题。',
  },
  {
    id: 'K_3',
    title: '响应式基础：ref、reactive、模板自动解包',
    navTitle: 'K_3 响应式基础',
    category: '响应式',
    path: '/k-3/reactivity',
    summary: '用学习进度展示 ref 与 reactive 的适用边界和模板自动解包。',
    demo: K03Reactivity,
    code: K03Code,
    language: 'vue',
    principle: 'ref 适合单个值，reactive 适合对象集合；状态变化会触发依赖它的视图重新渲染。',
    flow: ['创建响应式状态', '事件中修改状态', '视图自动读取最新值'],
    notes: ['在 script 中访问 ref 要写 .value', 'reactive 解构会丢失响应式，必要时使用 toRefs'],
    problem: '解决数据变化后页面如何自动同步的问题。',
  },
  {
    id: 'K_4',
    title: '计算与监听：computed、watch、watchEffect',
    navTitle: 'K_4 计算与监听',
    category: '响应式',
    path: '/k-4/computed-watch',
    summary: '用购物车金额展示派生数据和副作用监听的区别。',
    demo: K04ComputedWatch,
    code: K04Code,
    language: 'vue',
    principle: 'computed 缓存派生结果，watch 精确监听指定来源，watchEffect 自动收集同步读取的依赖。',
    flow: ['修改单价或数量', 'computed 得到总价', 'watch 记录金额变化'],
    notes: ['能用 computed 表达的值不要用 watch 手动同步', 'watch 适合请求、日志、本地存储等副作用'],
    problem: '解决派生状态和状态变化副作用如何分工的问题。',
  },
  {
    id: 'K_5',
    title: '条件与列表渲染：v-if、v-show、v-for、key',
    navTitle: 'K_5 条件与列表',
    category: '模板基础',
    path: '/k-5/condition-list',
    summary: '用任务看板展示条件渲染、显示切换和列表 key。',
    demo: K05ConditionList,
    code: K05Code,
    language: 'vue',
    principle: 'v-if 控制节点创建销毁，v-show 控制显示隐藏，v-for 用稳定 key 保持列表身份。',
    flow: ['读取任务数组', '根据完成状态决定显示', '用 key 让每个任务保持独立身份'],
    notes: ['频繁切换优先 v-show', '列表 key 不要用随机数'],
    problem: '解决页面内容按状态出现、隐藏和重复渲染的问题。',
  },
  {
    id: 'K_6',
    title: '表单处理：v-model、修饰符、基础校验',
    navTitle: 'K_6 表单处理',
    category: '用户输入',
    path: '/k-6/form-model',
    summary: '用活动报名表展示双向绑定、trim 修饰符和提交条件控制。',
    demo: K06FormModel,
    code: K06Code,
    language: 'vue',
    principle: 'v-model 把输入控件的值和响应式状态连接起来，修饰符负责常见输入清洗。',
    flow: ['用户填写字段', 'v-model 同步到 form', 'computed 判断是否允许提交'],
    notes: ['真实项目要补服务端校验', '表单对象适合 reactive，单个字段适合 ref'],
    problem: '解决用户输入如何进入业务状态并驱动按钮状态的问题。',
  },
  {
    id: 'K_7',
    title: '组件基础：props、emits、局部状态',
    navTitle: 'K_7 组件基础',
    category: '组件',
    path: '/k-7/component-basics',
    summary: '用可编辑卡片展示父组件输入、组件内部草稿和事件输出。',
    demo: K07ComponentBasics,
    code: K07Code,
    language: 'vue',
    principle: 'props 是外部输入，emits 是向外通知，组件内部状态只负责当前组件自己的交互。',
    flow: ['props 接收初始标题', '输入框修改局部草稿', '点击保存后 emit 通知外部'],
    notes: ['不要直接修改 props', 'emits 使用类型声明能提升调用安全性'],
    problem: '解决组件如何定义清晰输入输出边界的问题。',
  },
  {
    id: 'K_8',
    title: '插槽：默认插槽、具名插槽、作用域插槽',
    navTitle: 'K_8 插槽',
    category: '组件',
    path: '/k-8/slots',
    summary: '用课程套餐卡片说明插槽适合把结构交给父级定制。',
    demo: K08Slots,
    code: K08Code,
    language: 'vue',
    principle: '插槽让组件提供外壳和数据位置，具体内容由使用者传入。',
    flow: ['组件负责通用布局', '父级决定每个区域展示什么', '作用域插槽把内部数据暴露给父级模板'],
    notes: ['插槽适合内容定制，不适合滥用成隐式状态通信', '复杂插槽要保持命名清楚'],
    problem: '解决组件外观固定但局部内容需要灵活定制的问题。',
  },
  {
    id: 'K_9',
    title: '组件通信：父子通信、provide/inject',
    navTitle: 'K_9 组件通信',
    category: '组件',
    path: '/k-9/communication',
    summary: '用课程主题同步展示跨层级依赖注入的基本方式。',
    demo: K09Communication,
    code: K09Code,
    language: 'vue',
    principle: '父子通信优先 props/emits，跨层级共享稳定依赖可以使用 provide/inject。',
    flow: ['上层 provide 主题状态', '下层 inject 读取主题', '主题变化后相关视图同步更新'],
    notes: ['provide/inject 不适合替代全局状态管理', '注入 key 在大型项目中建议使用 Symbol'],
    problem: '解决深层组件不想逐层传 props 的问题。',
  },
  {
    id: 'K_10',
    title: '生命周期与 DOM 引用',
    navTitle: 'K_10 生命周期',
    category: '组件',
    path: '/k-10/lifecycle-ref',
    summary: '用自动聚焦计时器展示挂载、卸载和 template ref。',
    demo: K10LifecycleRef,
    code: K10Code,
    language: 'vue',
    principle: '生命周期钩子描述组件从创建到卸载的关键时机，template ref 用于访问真实 DOM 或子组件实例。',
    flow: ['挂载后获取输入框并聚焦', '启动计时器', '卸载时清理计时器'],
    notes: ['DOM 操作放在 onMounted 之后', '定时器、订阅、监听器要在卸载时清理'],
    problem: '解决需要接入浏览器 DOM 或外部资源生命周期的问题。',
  },
  {
    id: 'K_11',
    title: '组合式函数：可复用 composable',
    navTitle: 'K_11 组合式函数',
    category: '复用',
    path: '/k-11/composable',
    summary: '用验证码倒计时展示如何把状态和行为抽成可复用函数。',
    demo: K11Composable,
    code: K11Code,
    language: 'vue',
    principle: '组合式函数以 use 开头，返回响应式状态和方法，让多个组件复用同一段逻辑。',
    flow: ['组件调用 useCountdown', '组合式函数管理计时状态', '组件只负责展示和触发动作'],
    notes: ['组合式函数内部仍可使用生命周期钩子', '返回值保持简单明确，方便测试'],
    problem: '解决跨组件复用有状态逻辑的问题。',
  },
  {
    id: 'K_12',
    title: '路由：动态参数、导航守卫',
    navTitle: 'K_12 路由',
    category: '路由',
    path: '/k-12/routing/lee',
    summary: '用成员详情展示 RouterLink、动态参数和全局前置守卫。',
    demo: K12Routing,
    code: K12Code,
    language: 'vue',
    principle: 'Vue Router 把 URL 映射到组件，动态参数让同一个页面承载不同资源。',
    flow: ['点击 RouterLink 改变 URL', '组件从 route.params 读取参数', '路由守卫统一处理页面标题等横切逻辑'],
    notes: ['路由参数是字符串，业务使用前要转换类型', '权限校验适合放在守卫中集中处理'],
    problem: '解决单页应用中页面切换、深链访问和 URL 状态同步的问题。',
  },
  {
    id: 'K_13',
    title: 'Pinia 状态管理：store、getter、action',
    navTitle: 'K_13 Pinia',
    category: '状态管理',
    path: '/k-13/pinia-store',
    summary: '用课程购物车展示全局 store 的状态、派生值和业务动作。',
    demo: K13Pinia,
    code: K13Code,
    language: 'vue',
    principle: 'Pinia 把跨组件共享状态集中到 store，getter 表达派生值，action 封装状态变更。',
    flow: ['组件读取 store', '点击按钮调用 action', 'getter 自动得到最新总价'],
    notes: ['不要把所有局部状态都放进 store', 'action 中集中处理复杂修改更容易测试'],
    problem: '解决多个页面或组件共享业务状态的问题。',
  },
  {
    id: 'K_14',
    title: '异步请求与加载状态',
    navTitle: 'K_14 异步状态',
    category: '异步',
    path: '/k-14/async-state',
    summary: '用异步课程列表展示 loading、error、success 三态。',
    demo: K14AsyncState,
    code: K14Code,
    language: 'vue',
    principle: '异步流程要显式管理加载、错误和成功数据，避免页面状态含糊。',
    flow: ['触发加载并清空旧状态', '等待异步结果', 'finally 中关闭 loading'],
    notes: ['真实请求要处理取消和过期响应', '错误文案要面向用户而不是只打印控制台'],
    problem: '解决接口请求期间页面如何反馈状态的问题。',
  },
  {
    id: 'K_15',
    title: '动态组件与缓存：component、KeepAlive',
    navTitle: 'K_15 动态组件',
    category: '组件',
    path: '/k-15/dynamic-keep-alive',
    summary: '用学习工作台展示按状态切换组件并缓存实例。',
    demo: K15DynamicKeepAlive,
    code: K15Code,
    language: 'vue',
    principle: '动态组件通过 is 决定当前渲染谁，KeepAlive 缓存组件实例以保留内部状态。',
    flow: ['用户切换标签', 'component 渲染对应面板', 'KeepAlive 保留离开的面板实例'],
    notes: ['只缓存真正需要保留状态的组件', '缓存组件可配合 activated/deactivated 钩子'],
    problem: '解决多个面板切换和状态保留的问题。',
  },
  {
    id: 'K_16',
    title: '过渡动画：Transition、TransitionGroup',
    navTitle: 'K_16 过渡动画',
    category: '体验',
    path: '/k-16/transition',
    summary: '用学习提醒展示单元素和列表元素的进入离开动画。',
    demo: K16Transition,
    code: K16Code,
    language: 'vue',
    principle: 'Transition 给元素进入和离开阶段添加 CSS 类，TransitionGroup 处理列表变化。',
    flow: ['状态决定元素出现或离开', 'Vue 添加过渡阶段类名', 'CSS 完成动画效果'],
    notes: ['动画要短而明确', '列表动画必须提供稳定 key'],
    problem: '解决状态变化太突然、用户难以感知页面变化的问题。',
  },
  {
    id: 'K_17',
    title: '自定义指令',
    navTitle: 'K_17 自定义指令',
    category: '复用',
    path: '/k-17/directive',
    summary: '用自动聚焦搜索框展示指令如何封装底层 DOM 行为。',
    demo: K17Directive,
    code: K17Code,
    language: 'vue',
    principle: '自定义指令适合复用低层 DOM 操作，例如聚焦、权限、点击外部等。',
    flow: ['定义 vFocus 指令', '元素挂载时执行 mounted', '输入框自动获得焦点'],
    notes: ['业务逻辑优先用组件或组合式函数', '指令更适合操作 DOM 细节'],
    problem: '解决同类 DOM 行为在多个元素中重复编写的问题。',
  },
  {
    id: 'K_18',
    title: 'Teleport：弹窗与全局层',
    navTitle: 'K_18 Teleport',
    category: '体验',
    path: '/k-18/teleport',
    summary: '用确认弹窗展示组件内容如何渲染到 body。',
    demo: K18Teleport,
    code: K18Code,
    language: 'vue',
    principle: 'Teleport 让组件逻辑仍留在原位置，但 DOM 可以挂载到页面其他节点。',
    flow: ['组件内部控制 open 状态', 'Teleport 把弹窗 DOM 放到 body', '关闭时移除弹窗'],
    notes: ['弹窗、通知、菜单层常用 Teleport', '注意焦点管理和滚动锁定'],
    problem: '解决弹窗受父级 overflow、z-index 或布局限制的问题。',
  },
  {
    id: 'K_19',
    title: 'Suspense 与异步组件',
    navTitle: 'K_19 Suspense',
    category: '异步',
    path: '/k-19/suspense',
    summary: '用异步学习报告展示 fallback 和延迟加载组件。',
    demo: K19Suspense,
    code: K19Code,
    language: 'vue',
    principle: '异步组件延后加载代码或数据，Suspense 在等待期间展示 fallback 内容。',
    flow: ['创建异步组件', 'Suspense 捕获等待状态', '加载完成后显示真实内容'],
    notes: ['异步边界要控制粒度', '关键首屏内容不要过度异步化'],
    problem: '解决重组件或异步依赖加载期间的占位体验问题。',
  },
  {
    id: 'K_20',
    title: '性能与工程实践',
    navTitle: 'K_20 性能实践',
    category: '工程实践',
    path: '/k-20/performance',
    summary: '用课程列表展示过滤、v-memo 和列表渲染的基础优化思路。',
    demo: K20Performance,
    code: K20Code,
    language: 'vue',
    principle: '性能优化优先减少无意义计算和渲染，Vue 提供 v-memo 等指令控制局部更新。',
    flow: ['输入关键词', 'computed 缓存过滤结果', 'v-memo 跳过版本未变化的列表项更新'],
    notes: ['先度量再优化', '虚拟列表、异步组件、合理拆分都比盲目微优化更重要'],
    problem: '解决数据量变大后页面响应变慢的问题。',
  },
  {
    id: 'K_21',
    title: '测试与可维护性',
    navTitle: 'K_21 测试维护',
    category: '工程实践',
    path: '/k-21/testing-maintainability',
    summary: '用检查清单说明哪些 Vue3 代码适合被单测覆盖。',
    demo: K21TestingMaintainability,
    code: K21Code,
    language: 'vue',
    principle: '稳定的输入输出越清楚，测试越容易；组件、组合式函数和 store 应分别测试关键行为。',
    flow: ['把业务逻辑抽到可测试单元', '用测试描述用户行为或状态变化', '持续运行 type-check、build 和 test'],
    notes: ['不要只测试实现细节', '测试名称要表达业务预期'],
    problem: '解决项目变大后改动缺少信心、回归难以及时发现的问题。',
  },
]
