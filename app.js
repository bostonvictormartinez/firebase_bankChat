
'use strict';

const {
    dialogflow,
    Permission,
    Suggestions,
    BasicCard,
    Carousel,
    Image,
  } = require('actions-on-google');

const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
    const name=conv.user.storage.userName;
    if(!name){
    conv.ask(new Permission({
        context: 'Hi there, to get to know you better',
        permissions: 'NAME'
        }));

    }else{
        conv.ask(`Hello again, ${name}. What is it I can do for you?`)
    }
    
});

app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
    if (!permissionGranted) {
      conv.ask(`Ok, no worries. What's your choice? You can say open new account, apply for a loan or mortgage information.`);
      conv.ask(new Suggestions('new account', 'apply for loan', 'mortgage information'));
    } else {
      conv.data.userName = conv.user.name.display;
      conv.ask(`Thanks, ${conv.data.userName}. What's your choice? You can say open new account, apply for loan or mortgage info?`);
      conv.ask(new Suggestions('new account', 'apply for loan', 'mortgage information'));
    }
  });

 const keyTermsCarousel=()=>{
     const carousel = new Carousel({
         items:{
             'new checking':{
                 title:'New Checking Title',
                 synonyms:['new checkings', 'the checkings'],
                 image: new Image({
                     url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                     alt:'New Checking Information visual',
                 }),
             },
             'new account':{
              title:'New Account Title',
              synonyms:['new account', 'the new account'],
              image: new Image({
                  url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                  alt:'New Account Information visual',
              }),
          },
             'new savings':{
                title:'New Savings Title',
                synonyms:['new saving', 'the savings'],
                image: new Image({
                    url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                    alt:'New Saving Information visual',
                }),
            },
            'new loan':{
                title:'New Loan Title',
                synonyms:['new loans', 'the loan'],
                image: new Image({
                    url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                    alt:'New Loan Information visual',
                }),
            },
         }});
         return carousel;
 }


  const keyMap = {
    'new checking': {
      title: 'New Checking Title',
      text: 'New checking information for speakers goes here.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
        accessibilityText: 'New Checking Information',
      },
      display: 'WHITE',
    },
    'new account': {
      title: 'New Account Title',
      text: 'New account information. Sure. Which type of new account info, we have savings and checkings offering great returns?',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
        accessibilityText: 'New Account Information',
      },
      display: 'WHITE',
    },
    'new savings': {
      title: 'New Savings Title',
      text: 'New savings account information goes here for speakers.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDbFVfTXpoaEE5Vzg/style-color-uiapplication-palette2.png',
        accessibilityText: 'New Savings Information',
      },
      display: 'WHITE',
    },
    'new loan': {
      title: 'New Loan Title',
      text: 'Key loan information goes here for speakers.',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
        accessibilityText: 'New Loan Information',
      },
      display: 'WHITE',
    },
  };

  const newCheckingTermsCarousel=()=>{
    const carousel = new Carousel({
        items:{
            'key express checking':{
                title:'Key Express Checking',
                synonyms:['key express checkings', 'express checkings'],
                image: new Image({
                    url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                    alt:'New Express Checking Information',
                }),
            },
            'key advantage checking':{
               title:'Key Advantages Checking',
               synonyms:['key advantages checking', 'the key advantage'],
               image: new Image({
                   url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                   alt:'Key Advantage Checking Account Information',
               }),
           },
           'key privilege checking':{
               title:'Key Privilege Checking',
               synonyms:['key privilege', 'the key privilege'],
               image: new Image({
                   url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                   alt:'Key Privilege Checking Account',
               }),
           },
           'key privilege select checking':{
            title:'Key Privilege Select Checking',
            synonyms:['key privilege select', 'the key privilege select'],
            image: new Image({
                url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
                alt:'Key Privilege Checking Account',
            }),
        },
        'key student checking':{
          title:'Key Privilege Select Checking',
          synonyms:['key student checkings', 'the key student'],
          image: new Image({
              url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
              alt:'Key Student Checking Account',
          }),
      },
      'keybank hassle free':{
        title:'KeyBank Hassle Free Checking',
        synonyms:['key hassle free checkings', 'the key hassle free'],
        image: new Image({
            url:'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
            alt:'KeyBank Hassle Free Checking Account',
        }),
    },

        }});
        return carousel;
}

const newCheckingTerms = {
  'key express checking': {
    title: 'Key Express Checking',
    text: 'Key Express checking information for speakers goes here.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
      accessibilityText: 'Key Express Checking Information',
    },
    display: 'WHITE',
  },
  'key advantage checking': {
    title: 'Key Advantage Checking Account',
    text: 'Key advantage checking account information.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
      accessibilityText: 'Key Advantage Checking Information',
    },
    display: 'WHITE',
  },
  'key privilege checking': {
    title: 'Key Privilege Checking',
    text: 'Key Privilege checking account information goes here for speakers.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDbFVfTXpoaEE5Vzg/style-color-uiapplication-palette2.png',
      accessibilityText: 'Key Privilege Checking Information',
    },
    display: 'WHITE',
  }, 
  'key privilege select checking': {
    title: 'Key Privilege Select Checking',
    text: 'Key privilege select checking information goes here for speakers.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
      accessibilityText: 'Key Privilege Select Checking Information',
    },
    display: 'WHITE',
  },
  'key student checking': {
    title: 'Key Student Checking',
    text: 'Key student checking information goes here for speakers.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
      accessibilityText: 'Key Student Checking Information',
    },
    display: 'WHITE',
  },
  'keybank hassle free': {
    title: 'Keybank Hassle Free',
    text: 'KeyBank Hassle Free information goes here for speakers.',
    image: {
      url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
      accessibilityText: 'New Loan Information',
    },
    display: 'WHITE',
  },
};


app.intent('favorite color', (conv, {color}) => {
    const luckyNumber = color.length;
    const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
    if (conv.data.userName) {
      // If we collected user name previously, address them by name and use SSML
      // to embed an audio snippet in the response.
      conv.ask(`<speak>${conv.data.userName}, your lucky number is ` +
        `${luckyNumber}.<audio src="${audioSound}"></audio> ` +
        `Would you like to hear about new checking and savings information?</speak>`);
      conv.ask(new Suggestions('Yes', 'No'));
    } else {
      conv.ask(`<speak>Your lucky number is ${luckyNumber}.` +
        `<audio src="${audioSound}"></audio> ` +
        `Would you like to hear about new checking and savings information?</speak>`);
      conv.ask(new Suggestions('Yes', 'No'));
    }
});


 // Handle the Dialogflow intent named 'check_account_types_intent'.
// The intent collects a parameter named 'checkingAcctType'.
app.intent('general_checking_account_names_intent', (conv, {checkingAcctType}) => {
  checkingAcctType=conv.arguments.get('OPTION')|| checkingAcctType;
  if(!conv.screen){
      conv.ask(newCheckingTerms[checkingAcctType].text);
  } else 
    {
    conv.ask(`Here you go. `, new BasicCard(newCheckingTerms[checkingAcctType]));
   }
   conv.ask(`Do you want to hear about another checking account?`);
   conv.ask(new Suggestions('Yes', 'No'));
  
});
app.intent(['check_account_types_intent - yes', ''], (conv)=>{
  conv.ask('which new checking account info? please say new checking hassle free or privilege checking.');
  if(conv.screen) return conv.ask(newCheckingTermsCarousel());
});


  // Handle the Dialogflow intent named 'favorite new account'.
// The intent collects a parameter named 'newaccount'.
app.intent('favorite new account', (conv, {newaccount}) => {
    newaccount=conv.arguments.get('OPTION')|| newaccount;
    if(!conv.screen){
        conv.ask(keyMap[newaccount].text);
    } else 
      {
      conv.ask(`Here you go. `, new BasicCard(keyMap[newaccount]));
     }
     conv.ask(`Do you want to hear about another new account?`);
     conv.ask(new Suggestions('Yes', 'No'));
    
});

app.intent(['favorite new account - yes', 'favorite color - yes'], (conv)=>{
  conv.ask('which new account info? please say new checking or new savings.');
  if(conv.screen) return conv.ask(keyTermsCarousel());
});

app.intent('actions_intent_no_input', (conv) => {
  const repromptCount = parseInt(conv.arguments.get('REPROMPT_COUNT'));
  if (repromptCount === 0) {
    conv.ask('Which account information would you like to hear about?');
  } else if (repromptCount === 1) {
    conv.ask(`Please say the name of a type of account.`);
  } else if (conv.arguments.get('IS_FINAL_REPROMPT')) {
    conv.add(`Sorry we're having trouble. Let's ` +
      `transfer you to customer service. Please hold.`);
  }
});

app.intent('general_new_checking_intent', (conv, {checkingAcctType}) => {
  checkingAcctType=conv.arguments.get('OPTION')|| checkingAcctType;
  if(!conv.screen){
      conv.ask(newCheckingTerms[checkingAcctType].text);
  } else 
    {
    conv.ask(`Here you go. `, new BasicCard(newCheckingTerms[checkingAcctType]));
   }
   conv.ask(`Do you want to hear about another new account?`);
   conv.ask(new Suggestions('Yes', 'No'));
  
});


// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
