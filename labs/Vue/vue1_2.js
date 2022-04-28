new Vue ({
	el: '#app2',
	data: {
		seen: true
	},
	methods:{
		Vaihda(){
			this.seen=!this.seen
		}
	}
});