import { animate, animateChild, keyframes, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('transition', [
      transition('false <=> true', [
        sequence([
          style({ zIndex: 4, width: 0, offset: 0.1 }),
          animate('2s ease-out', keyframes([
            style({ width: '20%', offset: 0.2 }),
            style({ width: '60%', offset: 0.3 }),
            style({ width: '100%', offset: 0.4 }),
            style({ width: '100%', offset: 0.5 }),
            style({ width: '60%', offset: 0.6 }),
            style({ width: '40%', offset: 0.7 }),
            style({ width: '20%', offset: 0.8 }),
            style({ width: 0, offset: 0.9 }),
            style({ zIndex: -1, width: 0, offset: 1.0 })
          ]))
        ])
      ])
    ]),

    trigger('lineReveal', [
      transition('void => *', [style({ height: 0 }), animate('700ms 0.1s ease')]),
    ]),

    trigger('nameReveal', [
      transition('void => *', [
        query('.letter:enter', [
          stagger(0, [
            style({ fontSize: 0, transform: 'rotate(-90deg)  translate(-10px, -20px)' }),
            animate('0.4s 0.8s')
          ])
        ])
      ]),
    ]),

    trigger('leftIn', [
      state('hidden', style({ transform: 'translate(-20rem, 0rem)', opacity: 0 })),
      state('visible', style({ transform: 'translate(0rem, 0rem)', opacity: 1 })),
      transition('visible <=> hidden', [animate('10s 4s')]),
      transition('void <=> *', [style({ transform: 'translateX(-60rem)' }), animate(500)]),
    ]),

    trigger('reveal', [
      state('hidden', style({ zIndex: -1 })),
      state('visible', style({ zIndex: 2 })),
      transition('hidden => visible', [animate('3.0s')]),
      transition('visible => hidden', [animate('1.6s')])
    ]),

  ]
})
export class AppComponent implements OnInit {
  sections: string[] = ['section1', 'section2', 'section3'];
  name: string[] = ['a', 'k', 's', 'h', 'a', 'y'];
  currentSection = 0;
  section1 = 'visible';
  section2 = 'hidden';
  section3 = 'hidden';
  transit = 'false';
  ngOnInit() { }

  changeSection(section: number) {
    if(this.currentSection == section) {
      return ;
    }
    this.currentSection = section;
    this.transit = this.transit == 'true' ? 'false' : 'true';
    if (this.sections[this.currentSection] == 'section1') {
      this.section1 = 'visible';
      this.section2 = 'hidden';
      this.section3 = 'hidden';
    }
    else if (this.sections[this.currentSection] == 'section2') {
      this.section1 = 'hidden';
      this.section2 = 'visible';
      this.section3 = 'hidden';
    }
    else if (this.sections[this.currentSection] == 'section3') {
      this.section1 = 'hidden';
      this.section2 = 'hidden';
      this.section3 = 'visible';
    }
    // this.transit = 'false';
  }

  width = 100;
  height = 100;
  style: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100vh',
    'z-index': 0,
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
