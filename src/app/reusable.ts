import {
    style,
    animate,
    state,
    trigger,
    transition,
    animation,
    query,
    group,
    animateChild
} from '@angular/animations';

export const myFirstAnimation = trigger('firstAnimation', [
    state('open', 
        style({
                height: '100px',
                width: '100px',
                backgroundColor: '#7c6ce0'
        })
    ),
    state('closed',
        style({
            height: '250px',
            width: '250px',
            backgroundColor: '#2d2468',
            transform: 'scale(1.2)' 
        })
    ),
    transition('open <=> closed', animate('0.5s'))
  ]);

  export const mySecondAnimation = animation([
    style({
      height: '{{ height }}',
      width: '{{ width }}',
      backgroundColor: '{{ backgroundColor }}',
      transform: 'scale({{ scale }})'
    }),
    animate('{{ time }}')
  ]);

  export const scrollTopAnimation = trigger('fadeFromTop', [
    state('disabled', style({
      opacity: '0',
      transform: 'translate3d(0,-48px,0)'
    })),
    state('enabled', style({
      opacity: '1',
      transform: 'translate3d(0,0,0)'
    })),
    transition('disabled <=> enabled', animate('0.8s ease-in-out'))
  ]);

  export const scrollLaftAnimation = trigger('fadeFromLaft', [
    state('disabled', style({
      opacity: '0',
      transform: 'translate3d(-120px,0,0)'
    })),
    state('enabled', style({
      opacity: '1',
      transform: 'translate3d(0,0,0)'
    })),
    transition('disabled <=> enabled', animate('0.8s ease-in-out'))
  ]);

  export const scrollRightAnimation = trigger('fadeFromRight', [
    state('disabled', style({
      opacity: '0',
      transform: 'translate3d(120px,0,0)'
    })),
    state('enabled', style({
      opacity: '1',
      transform: 'translate3d(0,0,0)'
    })),
    transition('disabled <=> enabled', animate('0.8s ease-in-out'))
  ]);

  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);