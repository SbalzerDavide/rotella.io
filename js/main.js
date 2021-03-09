// Extend DayJS with plugin
dayjs.extend(window.dayjs_plugin_relativeTime);


const app = new Vue({
    el: "#app",
    data:{
        start: '',
        time: '',
        now: '',
        dayDiff: '',
        dayDiff2: '',
        weekDiff: '',
        weekDiff2: '',
        diffMore: '',
        diffMore2: '',
        term: '',
        second: '',
        secondFormat: '',
        future: '',
        inputWeek: 0,
        inputDay: 0,
        add: '',
        addedDay: '',
    },
    created(){
        this.now = dayjs();
    },
    methods:{
        go(){
            // this.time = dayjs(this.start).format('DD/MM/YYYY');
            this.time = dayjs(this.start);
            // this.time = dayjs(this.start).toNow();
            this.dayDiff = this.now.diff(this.time, 'day');
            console.log(this.dayDiff, 'day');
            this.weekDiff = this.now.diff(this.time, 'week');
            console.log(this.weekDiff, 'week');
            this.diffMore = this.dayDiff % 7;
            this.term = dayjs(this.time).add(280, 'day').format('DD/MM/YYYY');


            // console.log(this.start.diff(this.now));
            // const date1 = dayjs('2019-01-25');
            // const date2 = dayjs('2018-06-05');
            // const date3 = (date1.diff(date2));
            // console.log(date3);
        },
        go2(){
            this.secondFormat = dayjs(this.second);
            this.dayDiff2 = this.secondFormat.diff(this.time, 'day');
            console.log(this.dayDiff2, 'day');
            this.weekDiff2 = this.secondFormat.diff(this.time, 'week');
            console.log(this.weekDiff2, 'week');
            this.diffMore2 = this.dayDiff2 % 7;
            this.future = dayjs(this.time).add(280, 'day').format('DD/MM/YYYY');


        },
        go3(){
            this.add = parseInt(this.inputDay) + (parseInt(this.inputWeek) * 7 );
            this.addedDay = dayjs(this.time).add(this.add, 'day').format('DD/MM/YYYY');

            
        }
    }
})