<template>
	<div class="container">
		<a :href="cardData.link" class="link">
		
				<div class="image">
					<img :src="cardData.imgSrc" alt="image">
				</div>
				<div class="content">
					<h3 class="title">{{cardData.title}}</h3>
					<div class="price">{{cardData.price}} ₴</div>
				</div>
		
		</a>
	</div>
</template>

<script>
	export default {
		name: 'ProductItem',
		
		props: {
			cardData: {
				type: Object,
				default: ()=>({})
			},
		},

	}
</script>

<style lang="scss" scoped>
/* Однулення стилів */
*,
*::before,
*::after{
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
}
li{
	list-style: none;
}
a {
	color: inherit;
	text-decoration: none;
}
img{
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6{
	font-weight: inherit;
	font-size: inherit;
}
input,
button,
textarea{
	font-family: inherit;
	font-size: inherit;
}
button{
	cursor: pointer;
	color: inherit;
	background-color: inherit;
}
html,
body{
	height: 100%;
}
body{
	line-height: 1;
}

.container {
	max-width: 400px;
	padding: 10px;
	

}
.link {
	display: flex;
	flex-direction: row;
	gap: 20px;

}
.image {
	flex: 0 1 50%;
	img{
		max-width: 100%;
	}
}
.content {
	flex: 0 1 50%;
	text-align: start;
}
.title{
	font-size: 20px;
  color: rgb(28, 101, 169);
  padding: 10px 0 10px 0;

  &:hover {
    text-decoration: underline;
  }
}
.price {
	font-size: 24px;
	color: red;
	flex-grow: 1;
	padding-bottom: 10px;
 }


</style>