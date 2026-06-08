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
import E01Button from '../demos/E01Button.vue'
import E01Code from '../demos/E01Button.vue?raw'
import E02Form from '../demos/E02Form.vue'
import E02Code from '../demos/E02Form.vue?raw'
import E03Table from '../demos/E03Table.vue'
import E03Code from '../demos/E03Table.vue?raw'
import E04Dialog from '../demos/E04Dialog.vue'
import E04Code from '../demos/E04Dialog.vue?raw'
import E05Message from '../demos/E05Message.vue'
import E05Code from '../demos/E05Message.vue?raw'
import E06Popover from '../demos/E06Popover.vue'
import E06Code from '../demos/E06Popover.vue?raw'
import E07Dropdown from '../demos/E07Dropdown.vue'
import E07Code from '../demos/E07Dropdown.vue?raw'
import E08Tabs from '../demos/E08Tabs.vue'
import E08Code from '../demos/E08Tabs.vue?raw'

export interface KnowledgeCategory {
  id: string
  name: string
  path: string
  status: 'ready' | 'planned'
  intro?: string
  officialUrl?: string
}

export interface Lesson {
  id: string
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

export const knowledgeCategories: KnowledgeCategory[] = [
  { id: 'vue', name: 'Vue3', path: '/vue', status: 'ready' },
  { id: 'element-plus', name: 'Element Plus', path: '/element-plus', status: 'ready', intro: 'Element Plus 是基于 Vue 3 的组件库，提供丰富的企业级 UI 组件，覆盖表格、表单、弹窗、导航等常见场景。', officialUrl: 'https://element-plus.org/' },
  { id: 'typescript', name: 'TypeScript', path: '/typescript', status: 'planned' },
  { id: 'react', name: 'React', path: '/react', status: 'planned' },
  { id: 'engineering', name: '工程化', path: '/engineering', status: 'planned' },
]

export const lessons: Lesson[] = [
  {
    id: 'K_1',
    title: '应用创建、入口挂载、SFC 基础结构',
    navTitle: '应用入口',
    category: '工程起点',
    path: '/vue/k-1/app-entry',
    summary: '从入口文件理解 Vue 应用实例、插件注册、根组件挂载和单文件组件的基本组成。',
    demo: K01AppEntry,
    code: K01Code,
    language: 'vue',
    principle:
      'Vue3 应用从 createApp 创建独立应用实例开始。应用实例负责承载根组件、全局插件、全局配置和挂载目标；SFC 则把逻辑、模板和样式放在同一个组件文件里，让组件成为可维护的最小页面单元。',
    flow: [
      '在 main.ts 中创建应用实例，导入全局样式和根组件。',
      '通过 app.use 注册 Router、Pinia 等跨页面能力，让后续组件可以读取路由和 store。',
      '调用 mount("#app") 把 Vue 接管到 index.html 的挂载点，之后页面更新交给 Vue 响应式系统处理。',
    ],
    notes: [
      '入口文件只放应用装配逻辑，不放具体业务流程，否则项目变大后很难定位问题。',
      'SFC 的 template 负责结构，script setup 负责状态和行为，样式尽量服务当前组件或全局布局。',
      '插件注册顺序通常不影响普通页面，但依赖注入类插件要在组件挂载前完成。',
    ],
    problem: '解决"Vue 项目从哪里启动、全局能力在哪里接入、页面如何被根组件接管"的入门问题。',
  },
  {
    id: 'K_2',
    title: '模板语法、插值、指令、事件绑定',
    navTitle: '模板语法',
    category: '模板基础',
    path: '/vue/k-2/template-syntax',
    summary: '用订单搜索展示插值、v-model、v-if、v-for、属性绑定和事件绑定如何协作。',
    demo: K02TemplateSyntax,
    code: K02Code,
    language: 'vue',
    principle:
      'Vue 模板是一层声明式视图描述：状态是什么，页面就应该长什么样。插值负责显示文本，指令负责常见 DOM 行为，事件绑定负责把用户动作交回组件逻辑。',
    flow: [
      '输入框通过 v-model 把关键词同步到响应式状态。',
      'computed 根据关键词过滤订单列表，避免在模板中写复杂表达式。',
      '模板根据过滤结果使用 v-if/v-else 显示反馈，并通过 v-for 渲染列表。',
    ],
    notes: [
      '模板里可以写表达式，但复杂判断应移到 computed 或函数中，让模板保持可读。',
      'v-for 的 key 要稳定且能代表数据身份，不要使用随机数。',
      '事件处理函数只处理本次交互，不要在模板中堆叠过多内联逻辑。',
    ],
    problem: '解决"如何把用户输入、条件判断、列表展示和点击事件组织成一个可读交互"的问题。',
  },
  {
    id: 'K_3',
    title: '响应式基础：ref、reactive、模板自动解包',
    navTitle: '响应式',
    category: '响应式',
    path: '/vue/k-3/reactivity',
    summary: '用学习进度展示 ref 与 reactive 的适用边界，以及模板自动解包的阅读方式。',
    demo: K03Reactivity,
    code: K03Code,
    language: 'vue',
    principle:
      'ref 把单个值包装成响应式引用，reactive 把对象转换成响应式代理。模板读取这些状态时会自动追踪依赖，状态变化后依赖它的视图会重新渲染。',
    flow: [
      '用 ref 保存章节数量，用 reactive 保存用户资料这类对象状态。',
      '点击按钮时修改 count.value 和 profile.level。',
      '模板读取 count 和 profile，Vue 自动把最新状态同步到页面。',
    ],
    notes: [
      'script 中读取或修改 ref 要使用 .value，模板中会自动解包。',
      'reactive 对象不要随意解构；如果需要解构并保留响应式，使用 toRefs。',
      '单个原始值优先 ref，结构化对象优先 reactive 或多个 ref，按可读性选择。',
    ],
    problem: '解决"数据变化后页面为什么会自动更新，以及 ref/reactive 应该怎么选"的问题。',
  },
  {
    id: 'K_4',
    title: '计算与监听：computed、watch、watchEffect',
    navTitle: '计算监听',
    category: '响应式',
    path: '/vue/k-4/computed-watch',
    summary: '用购物车金额展示派生数据、精确监听和自动依赖收集的区别。',
    demo: K04ComputedWatch,
    code: K04Code,
    language: 'vue',
    principle:
      'computed 适合描述可缓存的派生值；watch 适合监听明确来源并执行副作用；watchEffect 会自动收集同步读取到的依赖，适合快速建立依赖驱动的副作用。',
    flow: [
      '单价或数量变化后，total 自动重新计算。',
      'watch 监听 total，把金额变化写入日志。',
      'watchEffect 根据数量阈值给出批量优惠提示。',
    ],
    notes: [
      '能用 computed 表达的状态不要用 watch 手动同步，避免出现两份数据不一致。',
      'watch 的回调适合请求、日志、本地存储和与外部系统同步。',
      'watchEffect 依赖收集更隐式，复杂场景下 watch 的可读性通常更好。',
    ],
    problem: '解决"派生值和状态变化后的副作用应该如何分工"的问题。',
  },
  {
    id: 'K_5',
    title: '条件与列表渲染：v-if、v-show、v-for、key',
    navTitle: '条件列表',
    category: '模板基础',
    path: '/vue/k-5/condition-list',
    summary: '用任务看板展示条件渲染、显示切换和列表身份维护。',
    demo: K05ConditionList,
    code: K05Code,
    language: 'vue',
    principle:
      'v-if 控制节点是否创建，v-show 控制节点是否显示，v-for 根据数组生成多个节点。key 是列表项的身份标识，帮助 Vue 在更新时复用正确的 DOM 和组件实例。',
    flow: [
      '任务数组作为单一数据来源，模板只负责把它展示出来。',
      '勾选开关改变 showDone，已完成任务通过 v-show 控制可见性。',
      '每个任务使用 id 作为 key，保证列表更新时身份稳定。',
    ],
    notes: [
      '频繁显示隐藏且 DOM 较简单时，v-show 通常更合适。',
      '真正需要销毁和重建内容时才使用 v-if，例如权限区域或昂贵组件。',
      'key 不要使用数组下标来表示会增删排序的数据。',
    ],
    problem: '解决"页面内容如何根据状态出现、隐藏，以及列表如何稳定更新"的问题。',
  },
  {
    id: 'K_6',
    title: '表单处理：v-model、修饰符、基础校验',
    navTitle: '表单处理',
    category: '用户输入',
    path: '/vue/k-6/form-model',
    summary: '用活动报名表展示双向绑定、输入清洗和提交条件控制。',
    demo: K06FormModel,
    code: K06Code,
    language: 'vue',
    principle:
      'v-model 把表单控件和响应式状态连接成双向关系；修饰符在同步前处理常见输入细节；校验逻辑通常用 computed 表达，让按钮状态和提示文案自动更新。',
    flow: [
      '用户填写姓名、邮箱并勾选同意项。',
      'v-model.trim 把输入同步到 form，同时去掉首尾空格。',
      'canSubmit 根据表单状态计算是否允许提交。',
    ],
    notes: [
      '前端校验用于即时反馈，真实提交仍必须依赖服务端校验。',
      '表单字段多且属于同一业务对象时，reactive 对象更便于组织。',
      '不要只通过禁用按钮表达错误，必要时应给出明确提示。',
    ],
    problem: '解决"用户输入如何进入业务状态，并驱动提交按钮和校验反馈"的问题。',
  },
  {
    id: 'K_7',
    title: '组件基础：props、emits、局部状态',
    navTitle: '组件基础',
    category: '组件',
    path: '/vue/k-7/component-basics',
    summary: '用可编辑卡片展示组件输入、内部草稿和事件输出的边界。',
    demo: K07ComponentBasics,
    code: K07Code,
    language: 'vue',
    principle:
      'props 是父级传入的只读输入，emits 是组件向外通知的事件，局部状态用于承载组件自己的临时交互。三者分开后，组件边界才清晰。',
    flow: [
      'props 接收外部传入的初始标题。',
      '输入框修改组件内部 draft，避免直接改 props。',
      '点击保存后更新本地展示，并通过 emit 把结果通知父级。',
    ],
    notes: [
      '不要在子组件中直接修改 props，这会破坏单向数据流。',
      'emits 使用 TypeScript 声明可以约束事件名和参数类型。',
      '局部草稿适合编辑场景，保存前不影响父级真实数据。',
    ],
    problem: '解决"组件如何定义可预测的输入输出，并保持内部交互独立"的问题。',
  },
  {
    id: 'K_8',
    title: '插槽：默认插槽、具名插槽、作用域插槽',
    navTitle: '插槽',
    category: '组件',
    path: '/vue/k-8/slots',
    summary: '用课程卡片展示组件提供结构，使用者定制内容的模式。',
    demo: K08Slots,
    code: K08Code,
    language: 'vue',
    principle:
      '插槽让组件保留自己的外壳、布局和行为，同时把某些内容区域开放给使用者。作用域插槽还能把组件内部数据传给外部模板，让定制内容更灵活。',
    flow: [
      'CourseCard 负责卡片结构，声明 header、default、footer 三个内容位置。',
      '父级在使用组件时填入课程名、说明和价格。',
      '作用域插槽把 product 交给父级，让父级决定如何展示这条数据。',
    ],
    notes: [
      '插槽适合内容定制，不适合承担复杂状态通信。',
      '具名插槽越多，组件使用成本越高，应保持命名直接。',
      '作用域插槽传出的数据要稳定，不要暴露太多内部实现细节。',
    ],
    problem: '解决"组件结构相同但局部内容经常变化"的复用问题。',
  },
  {
    id: 'K_9',
    title: '组件通信：父子通信、provide/inject',
    navTitle: '组件通信',
    category: '组件',
    path: '/vue/k-9/communication',
    summary: '用课程主题同步展示跨层级依赖注入的基本方式。',
    demo: K09Communication,
    code: K09Code,
    language: 'vue',
    principle:
      '父子之间优先使用 props 和 emits；当数据需要跨过多层组件传递，并且它更像上下文能力时，可以由上层 provide，再由后代 inject 读取。',
    flow: [
      '上层组件维护 theme，并通过 provide 暴露给后代。',
      '后代组件通过 inject 获取同一个响应式主题。',
      '用户切换主题时，依赖该主题的后代视图自动更新。',
    ],
    notes: [
      'provide/inject 适合主题、表单上下文、组件库配置等稳定上下文。',
      '频繁变化且跨页面共享的业务状态更适合 Pinia。',
      '大型项目建议使用 Symbol 作为注入 key，避免字符串冲突。',
    ],
    problem: '解决"深层组件不想逐层传 props，但又需要读取上层上下文"的问题。',
  },
  {
    id: 'K_10',
    title: '生命周期与 DOM 引用',
    navTitle: '生命周期',
    category: '组件',
    path: '/vue/k-10/lifecycle-ref',
    summary: '用自动聚焦计时器展示挂载、卸载和 template ref。',
    demo: K10LifecycleRef,
    code: K10Code,
    language: 'vue',
    principle:
      '生命周期钩子描述组件进入页面、更新和离开页面的时机；template ref 让组件在必要时访问真实 DOM 或子组件实例。',
    flow: [
      '组件挂载后，inputRef 才能拿到真实输入框并执行 focus。',
      'onMounted 中启动计时器，页面持续更新停留时间。',
      'onUnmounted 中清理计时器，避免组件离开后仍然执行回调。',
    ],
    notes: [
      'DOM 相关操作必须等到 onMounted 之后。',
      '定时器、事件监听、订阅和第三方实例都应在卸载时释放。',
      '能通过声明式状态完成的事情，不要优先使用 DOM 操作。',
    ],
    problem: '解决"组件什么时候能访问 DOM，以及外部资源如何随组件销毁而清理"的问题。',
  },
  {
    id: 'K_11',
    title: '组合式函数：可复用 composable',
    navTitle: '组合函数',
    category: '复用',
    path: '/vue/k-11/composable',
    summary: '用验证码倒计时展示如何把有状态逻辑抽成可复用函数。',
    demo: K11Composable,
    code: K11Code,
    language: 'vue',
    principle:
      '组合式函数把响应式状态、派生值、方法和生命周期封装到普通函数中。组件调用它后获得一组可直接使用的状态和行为，从而复用逻辑而不是复用 UI。',
    flow: [
      '组件调用 useCountdown 并传入初始秒数。',
      '组合式函数内部管理 seconds、isFinished、start 和 reset。',
      '组件只负责渲染倒计时和触发按钮动作。',
    ],
    notes: [
      '组合式函数通常以 use 开头，方便识别它可能使用响应式和生命周期能力。',
      '返回值要少而明确，避免把组件重新变成"大杂烩"。',
      '可复用逻辑抽出后，要优先补单元测试。',
    ],
    problem: '解决"多个组件需要同一段有状态业务逻辑，但 UI 不完全相同"的问题。',
  },
  {
    id: 'K_12',
    title: '路由：动态参数、导航守卫',
    navTitle: '路由',
    category: '路由',
    path: '/vue/k-12/routing/lee',
    summary: '用成员详情展示 RouterLink、动态参数和全局前置守卫。',
    demo: K12Routing,
    code: K12Code,
    language: 'vue',
    principle:
      'Vue Router 把 URL 映射到组件。动态参数让同一个页面承载不同资源；导航守卫则适合集中处理标题、权限、埋点等横切逻辑。',
    flow: [
      '用户点击 RouterLink，地址从 lee 切换到 ming。',
      '组件通过 useRoute 读取 route.params.memberId。',
      '全局 beforeEach 根据路由 meta 更新浏览器标题。',
    ],
    notes: [
      '当前项目路由已加 /vue 分类层，后续可扩展 /react、/typescript 等知识类别。',
      '路由参数默认是字符串，业务使用前要做必要转换和兜底。',
      '权限、登录态等全局跳转逻辑不要散落在每个页面组件里。',
    ],
    problem: '解决"单页应用如何按 URL 切换页面、支持深链访问，并为知识类别预留路由层级"的问题。',
  },
  {
    id: 'K_13',
    title: 'Pinia 状态管理：store、getter、action',
    navTitle: 'Pinia',
    category: '状态管理',
    path: '/vue/k-13/pinia-store',
    summary: '用课程购物车展示全局 store 的状态、派生值和业务动作。',
    demo: K13Pinia,
    code: K13Code,
    language: 'vue',
    principle:
      'Pinia 把跨组件共享的业务状态集中到 store。state 保存数据，getter 表达派生结果，action 封装修改流程，让组件不用知道状态修改细节。',
    flow: [
      '组件通过 useCartStore 获取购物车 store。',
      '列表读取 cart.items，总价读取 cart.total getter。',
      '点击按钮调用 cart.addCourse，由 action 修改课程数量。',
    ],
    notes: [
      '只有跨组件或跨页面共享的状态才值得放入 Pinia。',
      '复杂修改流程放进 action，组件只表达用户意图。',
      'store 的 getter 和 action 很适合写单元测试。',
    ],
    problem: '解决"多个页面或组件需要共享同一份业务状态"的问题。',
  },
  {
    id: 'K_14',
    title: '异步请求与加载状态',
    navTitle: '异步状态',
    category: '异步',
    path: '/vue/k-14/async-state',
    summary: '用异步课程列表展示 loading、error、success 三态。',
    demo: K14AsyncState,
    code: K14Code,
    language: 'vue',
    principle:
      '异步请求不是只有"有没有数据"两种状态，还包括加载中、失败、空数据和成功等分支。显式建模这些状态，页面反馈才稳定。',
    flow: [
      '触发加载时打开 loading，并清空旧错误和旧数据。',
      '异步完成后写入课程列表；失败时写入用户可读的错误文案。',
      'finally 中关闭 loading，确保成功和失败都能结束加载态。',
    ],
    notes: [
      '真实接口要处理重复请求、取消请求和过期响应覆盖新数据的问题。',
      '错误提示应该面向用户，不要只依赖 console.error。',
      '加载态、空态、错误态应在 UI 上有明确区别。',
    ],
    problem: '解决"接口请求期间页面该显示什么，以及失败时如何恢复"的问题。',
  },
  {
    id: 'K_15',
    title: '动态组件与缓存：component、KeepAlive',
    navTitle: '动态组件',
    category: '组件',
    path: '/vue/k-15/dynamic-keep-alive',
    summary: '用学习工作台展示按状态切换组件并缓存实例。',
    demo: K15DynamicKeepAlive,
    code: K15Code,
    language: 'vue',
    principle:
      '动态组件通过 component 的 is 属性决定当前渲染哪个组件。KeepAlive 会缓存离开的组件实例，让再次切回时保留内部状态。',
    flow: [
      '用户点击"笔记"或"练习"切换 currentTab。',
      'component 根据 currentTab 渲染对应面板。',
      'KeepAlive 包住动态组件，避免每次切换都重新创建面板实例。',
    ],
    notes: [
      '不要把所有动态组件都缓存，缓存越多内存占用越高。',
      '需要感知进入和离开缓存状态时，可以使用 activated 和 deactivated。',
      '动态组件适合工作台、标签页、配置化局部区域等场景。',
    ],
    problem: '解决"多个面板共用同一位置渲染，并且切换回来希望保留状态"的问题。',
  },
  {
    id: 'K_16',
    title: '过渡动画：Transition、TransitionGroup',
    navTitle: '过渡动画',
    category: '体验',
    path: '/vue/k-16/transition',
    summary: '用学习提醒展示单元素和列表元素的进入离开动画。',
    demo: K16Transition,
    code: K16Code,
    language: 'vue',
    principle:
      'Transition 在元素进入和离开时自动添加阶段类名，CSS 根据这些类名执行动画。TransitionGroup 则处理列表中多个元素的增删移动。',
    flow: [
      '状态变化让提示文字进入或离开 DOM。',
      'Vue 自动添加 fade-enter、fade-leave 等阶段类。',
      'CSS transition 根据阶段类完成透明度和位移动画。',
    ],
    notes: [
      '动画应服务理解和反馈，不要为了装饰而拖慢操作。',
      '列表过渡必须使用稳定 key，否则 Vue 无法识别每个元素的身份。',
      '复杂动画可以交给 CSS 或动画库，但状态来源仍应保持清晰。',
    ],
    problem: '解决"页面状态变化太突然，用户难以感知发生了什么"的问题。',
  },
  {
    id: 'K_17',
    title: '自定义指令',
    navTitle: '自定义指令',
    category: '复用',
    path: '/vue/k-17/directive',
    summary: '用自动聚焦搜索框展示指令如何封装底层 DOM 行为。',
    demo: K17Directive,
    code: K17Code,
    language: 'vue',
    principle:
      '自定义指令直接作用在真实 DOM 元素上，适合封装聚焦、点击外部、权限显隐、滚动观察等低层 DOM 行为。',
    flow: [
      '定义 vFocus 指令，并在 mounted 阶段接收绑定的 DOM 元素。',
      '元素挂载后调用 el.focus()。',
      '组件中用 v-focus 声明这个 DOM 行为，不再重复写 onMounted 和 ref。',
    ],
    notes: [
      '业务状态和 UI 结构优先用组件或组合式函数表达。',
      '指令应尽量小而专注，只封装 DOM 级行为。',
      '涉及事件监听的指令要在 unmounted 中清理监听器。',
    ],
    problem: '解决"多个元素需要同一种 DOM 行为，重复写 ref/onMounted 很啰嗦"的问题。',
  },
  {
    id: 'K_18',
    title: 'Teleport：弹窗与全局层',
    navTitle: 'Teleport',
    category: '体验',
    path: '/vue/k-18/teleport',
    summary: '用确认弹窗展示组件内容如何渲染到 body。',
    demo: K18Teleport,
    code: K18Code,
    language: 'vue',
    principle:
      'Teleport 让组件逻辑仍然写在当前组件中，但把实际 DOM 渲染到另一个目标节点。弹窗因此不会被父级 overflow、transform 或 z-index 限制。',
    flow: [
      '组件内部用 open 控制弹窗是否显示。',
      'Teleport to="body" 把弹窗 DOM 移到 body 下。',
      '点击关闭按钮后修改 open，弹窗从 body 中移除。',
    ],
    notes: [
      '弹窗、通知、下拉浮层和全局抽屉都常用 Teleport。',
      '真实产品还要处理焦点陷阱、Esc 关闭、滚动锁定和无障碍标签。',
      'Teleport 改变 DOM 位置，不改变组件的响应式作用域。',
    ],
    problem: '解决"浮层被父容器裁剪或层级压住，无法自然覆盖全局页面"的问题。',
  },
  {
    id: 'K_19',
    title: 'Suspense 与异步组件',
    navTitle: 'Suspense',
    category: '异步',
    path: '/vue/k-19/suspense',
    summary: '用异步学习报告展示 fallback 和延迟加载组件。',
    demo: K19Suspense,
    code: K19Code,
    language: 'vue',
    principle:
      '异步组件把某些组件的加载延后，Suspense 为等待中的异步依赖提供统一 fallback。用户先看到占位反馈，加载完成后再看到真实内容。',
    flow: [
      'defineAsyncComponent 返回一个延迟解析的组件。',
      'Suspense 捕获异步等待阶段并展示 fallback 插槽。',
      '组件解析完成后，fallback 被替换为真实学习报告。',
    ],
    notes: [
      '异步边界要控制粒度，过细会增加复杂度，过粗会拖慢可见内容。',
      '关键首屏内容不宜全部异步化，否则用户会长时间只看到占位。',
      '异步失败时应提供错误兜底，本案例聚焦成功路径和等待态。',
    ],
    problem: '解决"重组件或远程依赖加载期间页面空白、不知道是否还在加载"的问题。',
  },
  {
    id: 'K_20',
    title: '性能与工程实践',
    navTitle: '性能实践',
    category: '工程实践',
    path: '/vue/k-20/performance',
    summary: '用课程列表展示过滤、v-memo 和列表渲染的基础优化思路。',
    demo: K20Performance,
    code: K20Code,
    language: 'vue',
    principle:
      '性能优化的核心是减少不必要的计算、渲染和资源加载。computed 缓存过滤结果，v-memo 在依赖未变化时跳过局部更新，但真正优化前应先确认瓶颈。',
    flow: [
      '用户输入关键词，keyword 变化触发 visibleCourses 重新计算。',
      'computed 避免无关状态变化时重复执行过滤逻辑。',
      '列表项使用 v-memo，根据版本号判断是否需要重新更新。',
    ],
    notes: [
      '先用浏览器性能工具或实际指标定位瓶颈，再决定优化手段。',
      '大列表优先考虑分页、虚拟列表和后端过滤。',
      'v-memo 是精细工具，不要在没有性能问题时大量使用。',
    ],
    problem: '解决"数据量变大或组件变重后，页面响应逐渐变慢"的问题。',
  },
  {
    id: 'K_21',
    title: '测试与可维护性',
    navTitle: '测试维护',
    category: '工程实践',
    path: '/vue/k-21/testing-maintainability',
    summary: '用检查清单说明哪些 Vue3 代码适合被单测覆盖。',
    demo: K21TestingMaintainability,
    code: K21Code,
    language: 'vue',
    principle:
      '可维护代码通常拥有清晰输入输出。组件测试关注用户行为和渲染结果，组合式函数测试关注状态变化，store 测试关注 action 和 getter 的业务规则。',
    flow: [
      '把纯业务逻辑抽到 composable 或 store，降低组件测试难度。',
      '用测试描述用户行为，例如输入、点击、提交后的可见结果。',
      '持续运行 type-check、test 和 build，把回归尽早暴露出来。',
    ],
    notes: [
      '测试应关注业务结果，不要过度绑定内部实现细节。',
      '测试名称要像规格说明，让以后的人能理解为什么要保留它。',
      '高风险逻辑优先测试，低价值快照不要大量堆积。',
    ],
    problem: '解决"项目变大后修改缺少信心、回归难以及时发现、知识案例难以长期维护"的问题。',
  },
  // Element Plus 知识案例
  {
    id: 'E_1',
    title: '按钮：类型、尺寸、状态与图标',
    navTitle: '按钮',
    category: '基础组件',
    path: '/element-plus/e-1/button',
    summary: '用课程操作按钮展示 ElButton 的类型、尺寸、状态和图标组合用法。',
    demo: E01Button,
    code: E01Code,
    language: 'vue',
    principle:
      'ElButton 提供多种类型（primary/success/warning/danger/info）、尺寸（large/default/small）、状态（loading/disabled）和圆角变体。图标按钮通过 circle 属性快速创建。',
    flow: [
      '根据业务语义选择按钮类型，如重要操作用 primary，危险操作用 danger。',
      '根据界面密度选择尺寸，大尺寸用于主要入口，小尺寸用于紧凑布局。',
      '通过 icon 属性或 Icon 组件为按钮添加语义图标。',
    ],
    notes: [
      '按钮类型应符合操作语义，不要滥用 primary。',
      'loading 状态应同时禁用按钮，防止重复提交。',
      '图标按钮应添加 aria-label 提供无障碍支持。',
    ],
    problem: '解决"不同场景下按钮应该如何选择类型和尺寸"的问题。',
  },
  {
    id: 'E_2',
    title: '表单：数据绑定、校验与提交',
    navTitle: '表单',
    category: '表单组件',
    path: '/element-plus/e-2/form',
    summary: '用用户注册表单展示 ElForm 的双向绑定、规则校验和提交处理。',
    demo: E02Form,
    code: E02Code,
    language: 'vue',
    principle:
      'ElForm 通过 model 绑定数据，rules 定义校验规则，validate 方法执行校验。表单组件（ElInput、ElSelect 等）通过 v-model 直接关联到 form 对象的对应字段。',
    flow: [
      '使用 reactive 定义表单数据对象，并用 rules 定义校验规则。',
      '表单组件通过 v-model 绑定到 form 对应字段，触发校验。',
      '点击提交时调用 validate，校验通过后再执行业务逻辑。',
    ],
    notes: [
      '前端校验用于即时反馈，真实提交仍必须依赖服务端校验。',
      '校验规则支持同步和异步自定义校验器。',
      'resetFields 会同时清空值和校验状态。',
    ],
    problem: '解决"表单如何进行数据绑定和客户端校验"的问题。',
  },
  {
    id: 'E_3',
    title: '表格：数据渲染、分页与筛选',
    navTitle: '表格',
    category: '数据展示',
    path: '/element-plus/e-3/table',
    summary: '用课程列表展示 ElTable 的列定义、数据绑定、筛选和自定义渲染。',
    demo: E03Table,
    code: E03Code,
    language: 'vue',
    principle:
      'ElTable 通过 data 属性传入数据数组，ElTableColumn 定义每列的渲染方式。template #default 可以自定义单元格内容，支持复杂数据和操作按钮。',
    flow: [
      '定义 columns 数组，指定每列的 prop、label 和宽度。',
      '通过 filter 方法根据搜索条件过滤数据。',
      '使用 template #default 自定义单元格渲染，如状态标签和操作按钮。',
    ],
    notes: [
      '表格列过多时应考虑固定列或横向滚动。',
      '金额、日期等格式化逻辑适合放在 computed 或工具函数中。',
      '大表格应配合分页或虚拟滚动使用。',
    ],
    problem: '解决"如何用表格展示和筛选结构化数据"的问题。',
  },
  {
    id: 'E_4',
    title: '对话框：模态与非模态',
    navTitle: '对话框',
    category: '反馈组件',
    path: '/element-plus/e-4/dialog',
    summary: '用课程创建弹窗展示 ElDialog 的显示控制、标题定制和表单集成。',
    demo: E04Dialog,
    code: E04Code,
    language: 'vue',
    principle:
      'ElDialog 通过 v-model 控制显示状态，title 定义标题内容，default slot 放置对话框主体内容，footer slot 放置底栏按钮。',
    flow: [
      '用 ref 控制 dialogVisible 布尔值决定对话框是否显示。',
      '对话框内容通过默认 slot 传入，支持复杂布局。',
      '点击确认按钮执行业务逻辑，点击取消或关闭图标隐藏对话框。',
    ],
    notes: [
      '模态对话框会阻止用户与页面其他部分交互。',
      '对话框内容不宜过深，应保持层级扁平。',
      '移动端应考虑使用 bottom-sheet 替代居中对话框。',
    ],
    problem: '解决"需要用户确认或输入时如何展示对话框"的问题。',
  },
  {
    id: 'E_5',
    title: '消息提示：ElMessage 与 ElMessageBox',
    navTitle: '消息提示',
    category: '反馈组件',
    path: '/element-plus/e-5/message',
    summary: '用操作反馈展示 ElMessage 的四种类型和 ElMessageBox 的确认与输入对话框。',
    demo: E05Message,
    code: E05Code,
    language: 'vue',
    principle:
      'ElMessage 用于轻量级操作反馈，支持 success/warning/error/info 四种类型。ElMessageBox 用于需要用户确认或输入的场景，返回 Promise 支持异步处理。',
    flow: [
      '调用 ElMessage.success/warning/error/info 显示对应类型的消息。',
      '使用 await ElMessageBox.confirm 等待用户确认。',
      '使用 await ElMessageBox.prompt 获取用户输入内容。',
    ],
    notes: [
      '消息提示自动关闭，无需手动清除。',
      '确认对话框适用于危险操作的二次确认。',
      '避免同时弹出多个消息提示。',
    ],
    problem: '解决"操作完成后如何给用户即时反馈"的问题。',
  },
  {
    id: 'E_6',
    title: '气泡卡片：悬浮触发与嵌套内容',
    navTitle: '气泡卡片',
    category: '展示组件',
    path: '/element-plus/e-6/popover',
    summary: '用快捷操作和课程列表展示 ElPopover 的触发方式和嵌套内容。',
    demo: E06Popover,
    code: E06Code,
    language: 'vue',
    principle:
      'ElPopover 的触发方式由 trigger 属性控制（hover/click/focus/manual）。reference slot 放置触发源，默认 slot 放置气泡内容。',
    flow: [
      'hover 触发适合工具提示和快捷操作。',
      'click 触发适合需要展开详细操作的场景。',
      '气泡内容通过默认 slot 传入，支持复杂布局和交互。',
    ],
    notes: [
      '气泡卡片会被窗口边缘截断，Element Plus 会自动调整位置。',
      '嵌套内容时应避免气泡内再嵌套气泡。',
      'trigger=manual 需要手动控制显示状态。',
    ],
    problem: '解决"悬浮或点击时如何展示辅助信息和快捷操作"的问题。',
  },
  {
    id: 'E_7',
    title: '下拉菜单：Dropdown 与命令处理',
    navTitle: '下拉菜单',
    category: '导航组件',
    path: '/element-plus/e-7/dropdown',
    summary: '用操作菜单和课程切换展示 ElDropdown 的菜单项和命令处理。',
    demo: E07Dropdown,
    code: E07Code,
    language: 'vue',
    principle:
      'ElDropdown 通过 @command 事件处理菜单项点击，command 属性标识每个菜单项。dropdown slot 放置下拉菜单内容，reference slot 放置触发源。',
    flow: [
      '触发源可以是按钮或文字，点击后展开下拉菜单。',
      '点击菜单项时通过 command 参数区分不同操作。',
      '可以配合 split-button 实现下拉菜单与主按钮的组合。',
    ],
    notes: [
      '下拉菜单项过多时应考虑分组或搜索。',
      '禁用项使用 disabled 属性，防止误操作。',
      'divided 属性可以在菜单项之间加分隔线。',
    ],
    problem: '解决"如何组织多个操作命令并响应用户选择"的问题。',
  },
  {
    id: 'E_8',
    title: '标签页：选项切换与内容隔离',
    navTitle: '标签页',
    category: '导航组件',
    path: '/element-plus/e-8/tabs',
    summary: '用学习面板展示 ElTabs 的标签切换和内容隔离。',
    demo: E08Tabs,
    code: E08Code,
    language: 'vue',
    principle:
      'ElTabs 通过 v-model 控制当前激活的标签页，每个 ElTabPane 定义一个标签页的内容。切换标签时只会渲染当前激活 pane 的内容。',
    flow: [
      '使用 v-model 绑定当前激活的标签页名称。',
      '每个标签页内容放在对应的 ElTabPane 中。',
      '可以通过 @tab-click 监听标签切换事件。',
    ],
    notes: [
      '标签页数量应控制在 5-7 个以内。',
      '禁用标签页使用 disabled 属性。',
      'type=card 可以使用卡片样式的标签页。',
    ],
    problem: '解决"如何在同一位置展示多个面板并让用户切换"的问题。',
  },
]
