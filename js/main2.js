// Extend DayJS with plugin
dayjs.extend(window.dayjs_plugin_relativeTime);

const appV2 = new Vue({
    el: "#app2",
    data:{
      start: '',
      time: '',
      now: '',
      dayDiff: '',
      dayDiff2: '',
      weekDiff: 0,
      weekDiff2: 0,
      diffMore: '',
      // diffMore2: '',
      term: '',
      second: '',
      secondFormat: '',
      future: '',
      inputWeek: 0,
      inputDay: 0,
      add: '',
      addedDay: '',
      startFromEnd: '',
      inputParto: '',
      active: 'UM',
    },
    created(){
      this.now = dayjs();
      // this.createPalette()
    },
    methods:{
      refresh(){
        this.time = "";
        this.dayDiff = "";
        this.weekDiff = 0;
        this.term = "";
      },
      takeFromStart(){
        this.time = dayjs(this.start);
        this.dayDiff = this.now.diff(this.time, 'day');
        this.weekDiff = this.now.diff(this.time, 'week');
        this.term = dayjs(this.time).add(280, 'day').format('DD/MM/YYYY');
      },
      takefromEnd(){
        this.time = dayjs(this.inputParto).subtract(280, 'day');
        this.dayDiff = this.now.diff(this.time, 'day');
        this.weekDiff = this.now.diff(this.time, 'week');
        this.term = dayjs(this.time).add(280, 'day').format('DD/MM/YYYY');
      },
      go2(){
        this.secondFormat = dayjs(this.second);
        this.dayDiff2 = this.secondFormat.diff(this.time, 'day');
        this.weekDiff2 = this.secondFormat.diff(this.time, 'week');
        // this.diffMore2 = this.dayDiff2 % 7;
        this.future = dayjs(this.time).add(280, 'day').format('DD/MM/YYYY');
      },
      go3(){
        let add =  parseInt(this.inputDay) + (parseInt(this.inputWeek) * 7 );
        this.addedDay = dayjs(this.time).add(add, 'day').format('DD/MM/YYYY');
      },
      createPalette(){
        json_data = {
          "mode":"transformer", // transformer, diffusion or random
          "num_colors":4, // max 12, min 2
          "temperature":"1.2", // max 2.4, min 0
          "num_results":50, // max 50 for transformer, 5 for diffusion
          "adjacency":[ "0", "65", "45", "35", "65", "0", "35", "65", "45","35", "0", "35", "35", "65", "35", "0"], // nxn adjacency matrix as aflat array of strings
          "palette":["-", "-", "-", "-"], // locked colors as hex codes, or '-' if blank
        }

        fetch('https://api.huemint.com/color', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(json_data)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if(data.results[0]){
            document.body.style.setProperty('--color0', data.results[0]?.palette[0]);
            document.body.style.setProperty('--color1', data.results[0]?.palette[1]);
            document.body.style.setProperty('--color2', data.results[0]?.palette[2]);
            document.body.style.setProperty('--color3', data.results[0]?.palette[3]);
          }
        })
        .catch(error => console.error(error));
      }
    }
})


// {type: "post",url: "https://api.huemint.com/color",data: JSON.stringify(json_data),contentType: "application/json; charset=utf-8",dataType: "json"});
// examplevar 