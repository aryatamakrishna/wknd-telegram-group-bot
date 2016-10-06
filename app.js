// "use strict";

// const Telegram = require("telegram-node-bot");
// const TelegramBaseController = Telegram.TelegramBaseController;
// const tg = new Telegram.Telegram("242069107:AAFYg2XM8dKd35j1hLmILQX8nlwYnNWAgo0");

// class PingController extends TelegramBaseController{
// 	/**
// 	*@param {Scope} $
// 	**/
// 	pingHandler($){
// 		$.sendMessage("Wikan Gay")
// 	}

// 	get routes(){
// 		return {
// 			"ping":"pingHandler"
// 		}
// 	}
// }
// class StartController extends TelegramBaseController{
// 	/**
// 	*@param {Scope} $
// 	**/
// 	startHandler($){
// 		$.sendMessage("Hello from the other side! I help you for creating a new group with automaticly add with json data :)")
// 	}

// 	get routes(){
// 		return {
// 			"/start":"startHandler"
// 		}
// 	}
// }

// console.log("Udah jalan!");

// tg.router
// 	.when(["ping"], new PingController())
// 	.when(["/start"], new StartController())

'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('242069108:AAFYg2XM8dKd35j1hLmILQX8nlwYnNWAgo0')



class StartController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    startHandler($) {
    	// $.sendPhoto({url:"http://stickersgram.com/media/img/thumb/HideThePainHarold/8_thumbnail.png", filename:"8_thumbnail.png"})
        $.sendMessage('Hi  from Weekenders, \nThis bot will help you build new group \n\n/start - to start bot \n/newGroup - Start Create your new group \n/addPeople - add new person from your list \n/deletePeople - delete person from your list \n\n Enjoy this bot :)')
        console.log($)
    }

    get routes() {
        return {
            'StartCommand': 'startHandler'
        }
    }
}
class NewGroupController extends TelegramBaseController{
	groupHandler($){
		const form = {
		    name: {
		        q: 'Please Send me your group name?',
		        error: 'sorry, wrong input',
		        validator: (message, callback) => {
		            if(message.text) {
		                callback(true, message.text) //you must pass the result also 
		                return
		            }
		 
		            callback(false)
		        }
		    },
		    image: {
		        q: 'Please Send me picture of your group?',
		        error: 'sorry, wrong input',
		        validator: (message, callback) => {
		            if(message.text) {
			            callback(false)
		            }
	                callback(true, message._photo) //you must pass the result also 
	                message.forEach(function(cb){
	                	console.log(cb)
	                })
	                return
		        }
		    },
		    type: 
		    {
		        q: 'You create group for what?',
		        
		        error: 'sorry, wrong input',
		        validator: (message, callback) => {
	                
	                if(message.text) {cv
		                callback(true, message.text)

		                return
		            }
		            callback(false)
		 
		        },
		        callback: () => {
		        	$.runMenu({
	                	message:"select",
	                	layout:3,
	                	"birthday":()=>{
	                		return
	                	},
	                	"Project":()=>{
	                		return
	                	},
	                	"Iseng":()=>{
	                		return
	                	}
	                })
		        }
		    }
		    
		}

		$.runForm(form, (result) => {
			console.log(result)
		})
	}

	get routes(){
		return{
			"GroupCommand":"groupHandler"
		}
	}
}
console.log("jalan")
tg.router
    .when(new TextCommand('/start', 'StartCommand'), new StartController())
    .when(new TextCommand('/newGroup', 'GroupCommand'), new NewGroupController())
    // .when(new TextCommand('/addPeople', 'addCommand'), new AddPeopleController())
    // .when(new TextCommand('/deletePeople', 'delCommand'), new delPeopleController())

