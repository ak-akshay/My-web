import { animate, keyframes, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('lineReveal', [
      transition('void => *', [style({ height: 0 }), animate(700)]),
    ]),
    trigger('nameReveal', [
      transition('void => *', [
        query('.letter:enter', [
          stagger(0, [
            style({ fontSize: 0, transform: 'rotate(-90deg)  translate(-10px, -20px)' }), 
            animate('0.4s 0.8s')
          ])
        ],
        )
      ]),
    ]),
    trigger('leftIn', [
      state('visible', style({ transform: 'translate(-15rem, 0)', opacity: 0 })),
      state('visible', style({ transform: 'translate(0, 0)', opacity: 1 })),
      transition('visible <=> hidden', [animate('0.5s 0.5s')])
    ]),
    trigger('bottomIn', [
      transition('void <=> *', [style({ minHeight: '0', height: '0' }), animate(500)]),
    ]),
    trigger('reveal', [
      state('hidden', style({ transform: 'rotate3d(1, 1, 1, 120deg)', opacity: 0, zIndex: 0 })),
      state('visible', style({ transform: 'rotate3d(1, 1, 1, 0deg)', opacity: 1, zIndex: 3 })),
      transition('visible => hidden', [
        sequence([
          animate('0.5s', keyframes([
            style({ transform: 'rotate3d(1, 1, 1, 0deg)',  opacity: 1 }),
            style({ transform: 'rotate3d(1, 1, 1, 120deg)',  opacity: 0 }),])),
          animate('0.1s', keyframes([
            style({ zIndex: 3 }),
            style({ zIndex: 0 })]))
        ])
      ]),
      transition('hidden => visible', [
        sequence([
          animate('0.1s', keyframes([
            style({ zIndex: 0 }),
            style({ zIndex: 3 })])),
          animate('0.5s', keyframes([
            style({ transform: 'rotate3d(1, 1, 1, 120deg)',  opacity: 0 }),
            style({ transform: 'rotate3d(1, 1, 1, 0deg)',  opacity: 1 })]))
        ])
      ]),
    ]),
    trigger('slideTop', [
      state('hidden', style({ position: 'relative', top: '-100vh' })),
      state('visible', style({ position: 'relative', top: 0 })),
      transition('visible <=> hidden', [animate(400)]),
    ]),
    trigger('slideBottom', [
      state('hidden', style({ position: 'relative', top: '100vh' })),
      state('visible', style({ position: 'relative', top: 0 })),
      transition('visible <=> hidden', [animate(400)]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  sections:string[] = ['section1', 'section2', 'section3'];
  name :string[] = ['a', 'k', 's', 'h', 'a', 'y'];
  currentSection = 0;
  section1 = 'visible';
  section2 = 'hidden';
  ngOnInit() { }

  changeSection(section: number) {
    this.currentSection = section;
    if (this.sections[section] == 'section1') {
      this.section1 = 'visible';
      this.section2 = 'hidden';
    }
    else {
      this.section1 = 'hidden';
      this.section2 = 'visible';
    }
  }

  width = 100;
  height = 100;
  style: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100vh',
    'z-index': 3,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  params = {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#dc1925"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#4545cf",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
}
