
// import axios from 'axios'

// $(documnet).ready(function() {
//     $(".formFeedBack").on("submit", function() {
// 	let dataSubmit = $(this).serialize()
// 	$.ajax({
// 	    url: 'путь_до_файла обработчика',
// 	    method: 'post',
// 	    dataType: 'html',
// 	    data: dataSubmit,
// 	    success: function(data){
// 	    console.log(data);
// 	    $("form.formFeedBack .messageBlockForm").addClass("active")
// 	    setTimeout(() => {
// 	        $("form.formFeedBack .messageBlockForm").removeClass("active")
// 	    }, 3000);
// 	}
//         });
//     })
// })

// const Services = () =>{
    
//     const token = '5021816572:AAFeHhlrsZ4MfkDZa3ko7JmDyr91YylOpJ8';
//     const chat_id = '1009620283';
//     const api = `https://api.telegram.org/bot${token}/${chat_id}`;
//     return axios.post(api, {
//   parse_mode: 'HTML',
//   text: `Имя:${}a` 

//     })
// }


// export default Services;