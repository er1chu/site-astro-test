import { animate, inView, stagger } from 'motion'
export const easeSettings: any = [0.6, 0, 0.01, 0.99]

inView('.container-animation', ({ target }) => {
  animate(
    target.querySelectorAll('.child-animation'),
    {
      opacity: [0, 1],
      transform: ['translateY(100px) skewY(5deg)', 'translateY(0) skewY(0)'],
    },
    {
      delay: stagger(0.15),
      duration: 0.8,
      easing: easeSettings,
    }
  )
})

animate('fade-animation', { opacity: [0, 1] }, { duration: 2, delay: 0.2 })
