window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: '320px', duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 2, ease: 'power2.out'}, '-=0.8')
    .to('.bloc-txt #icones', {ease: 'power2.out'})
    .to('.f3', {y: 0, ease: 'power2.out'})
}