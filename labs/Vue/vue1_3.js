new Vue ({
	el: '#app3',
	data: {
		speed: 0,
		count: 0,
		message: 'You clicked me'
	},
	methods:{
		plus(){
			this.speed += 1
		},
		minus(){
			this.speed -= 1
		},
		reset(){
			this.speed=0
		},
		clicked(){
			this.count+=1
		}
	}
});