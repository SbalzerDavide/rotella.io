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
    }
})