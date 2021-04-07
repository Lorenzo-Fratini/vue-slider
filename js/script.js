function init() {
  
  new Vue({

    el: '#app',

    data: {

      'defaultImg' : 'earth.png',
      'image' : 'earth.png',
      'image2' : 'earth2.png',
      'image3' : 'earth-night.png'
      
    },

    methods: {

      nextImg: function() {

        if (this.defaultImg == this.image) {

          this.defaultImg = this.image2;
        } else if (this.defaultImg == this.image2) {

          this.defaultImg = this.image3;
        } else if (this.defaultImg == this.image3) {

          this.defaultImg = this.image;
        }

      },

      prevImg: function() {

        if (this.defaultImg == this.image) {

          this.defaultImg = this.image3;
        } else if (this.defaultImg == this.image2) {

          this.defaultImg = this.image;
        } else if (this.defaultImg == this.image3) {

          this.defaultImg = this.image2;
        }

      },

      timeNext: function() {

        setInterval(() => { this.nextImg();}, 3000);
      }
    },

    mounted () {

      this.timeNext()

    }
    
  });

}

$(init);