
let application = new Vue ({
	el: '#app1',
	data: {
		title: 'Hello world',
		change:'',
	},
	methods:{
		submit(){
			this.title = this.change;
			console.log(this.title);
		}
	},
	computed:{
		counter(){
			return this.change.length
		}
	}
});

