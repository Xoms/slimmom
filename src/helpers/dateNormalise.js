export default function dateNormalise(date) {
    return date.split('-').reverse().join('.')
}