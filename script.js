const range = document.getElementById('range')

range.addEventListener('input', (e)=> {
    const rangeValue = +e.target.value
    const label = e.target.nextElementSibling
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')
    const num_range_width = +rangeWidth.substring(0,rangeWidth.length-2)
    const num_label_width = +labelWidth.substring(0,labelWidth.length-2)
    const min = e.target.min
    const max = e.target.max
    const left = rangeValue * (num_range_width / max) - num_label_width / 2 + scale(rangeValue, min, max, 10,-10)
    label.style.left = `${left}px`

    label.innerText = rangeValue
})

const scale = (num, in_min, in_max,out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}