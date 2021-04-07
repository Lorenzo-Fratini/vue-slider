function init() {
  
  new Vue({

    el: '#app',

    data: {

      'images' : ['earth.png', 'earth2.png', 'earth-night.png'],
      'i' : 0

    },

    methods: {

      nextImg: function() {

        if ( (this.i + 1) == this.images.length ) {
          
          this.i = 0;
        } else {

          this.i++;
        }
        
      },

      prevImg: function() {

        if ( this.i == 0 ) {
          
          this.i = this.images.length - 1;
        } else {

          this.i--;
        }

      },

      timeNext: function() {

        setInterval(() => { this.nextImg();}, 3000);
      }
    },

    mounted () {

      this.timeNext();
    }

  });

}

$(init);