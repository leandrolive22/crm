import { date } from 'quasar'

// @ts-ignore
export default ({ Vue }) => {
  Vue.filter('capitalize', function (value: string) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  Vue.filter('formatDate', function (value: string) {
    return date.formatDate(value, 'DD/MM/YYYY')
  })

  Vue.filter('formatDateTime', function (value: string) {
    return date.formatDate(value, 'DD/MM/YYYY HH:mm')
  })
}
