class APIHelper 
{
  Gettoken()
  {
    cy.readFile("cypress/fixtures/paraToken.json").then((data) => 
    {
      cy.request({
        method: 'GET',
        url: 'https://unsplash.com/oauth/token?grant_type='+ data.grant_type+'&client_id='+ data.client_id +'&client_secret='+ data.client_secret +'&redirect_uri=' +data.redirect_uri +'&code='+ data.code,
        headers: {
          'Content-Type': 'application/json',
          Cookie: 'auth_user_id=10125871; ugid=0ede8802b769d4e97a483e209535ca725535776; un_sesh=YTRNNWxHWi8xZmsvUmxaL0JFNnNuVWZhT2pZT3dLYVhwYVNrbXFCMWo2bEdxR0J0Wm01SWkwbUdWWENvczV0MWJRMm5Fb0FBaGxrSlJRNzJjRWdpSVo3NnJqWHFLN2pFSzlPYldKQmxlZTRHRmsrYjlNYm1ZZ1JFbmlFbUdIaTZWbGRxNzgzQXo4TlRIT0VvTmRIQUtZWHVFTG5kWWY4RTAwQ1JvYWg4NnM0R3VpOXJhV3ZDQysxZWhhZ2Zhbk93dW9kK1NaM081Mk42QlBoMkt3NzNhM3hXVC9rSHhoTmtpaVhNdmpKMjMvNFpCYjVyTnIyanl3WmdlNi9xQnhrNkpSV1VsTm45b3VYZzZkaElETkxpK0JnOHk1MjRnbXZHV2o0T1ZWcWZLbGVueDRuME9RWmwvaXpOQ0psRHJTQkdHeFZrbXEzSGE2anVqM25NZDhlWnlqZnlybHpqc1ptcVlEd2RKVTVnMlV4QllUcmVoS1RudURabTFCSFFaU3lnMVlPZjZQMytnbW41Zy9HaGxQZ0ZjQWFWTEs5cHUzMUtDeVFPb1FwQmxqbitaVmowUjgzWmFNQ3UzZFVvam9VU3JGejJEaEh3ZjR1WEVJWHVqOGtjUTNnNDNiNnB6UWJzcjQ4aFo4MVNOSjNabzJYTEwwSFVFWVNEaFlZUzVZWTF1WmJ0L0FFN2N5MlhYcjB0S1d0eWRKaEQyTC9SdmFsY0tJMWJqWFNYNmlYWks5amFaRE1XVUhzRk53NE9WMGZMZ2Q0Y0hBT1VYcVFBdURHTEkraWs4c0RQbXNLWEpYQmtsam1BbzRnVG9wdkRxbnBjeDA0Y2I2ZUZDUEtldHA3dVJNK2ExcEF4Qysxa0NSK0VEbERUVFBoLy9PV0sxd3RKUEI1RkJZaHB2VUxrMytZTXF6YXZiV3BPVjV3Ry9JaERNdWZvdFdndUZ4cTdPczhvejlNc2RhYXUvK211dUQvN0MwNWhybjVpN1Badzdwb0l1U3d1WW1oK2pwUzNXbXhJU0ZDbmlTbGdSYWN4ellvQUlCYUR5SlZMaFYveFJJSGVCajIyK3MyWGMzdz0tLTRtaVNZcXFUcFJZU1lzWHBaTjl0UEE9PQ%3D%3D--2930786d48f61d0737d5e572039a65ec1327818b; xp-unsplash-plus=; xp-unsplash-plus-2=Control'
        }
      }).as('response')
      .its('status')
      .should('eq', 200);
      cy.get('@response').then((responseValue) => {
        cy.writeFile('cypress/fixtures/token.json', responseValue.body)
      })
     })    
   }
   APIGetPhotoLiked()
   {
      cy.readFile("cypress/fixtures/test.json", () => 
      {
      }).then((data) => {
      const data1 = data.username1;
        cy.request
        ({
          method: 'GET',
          url: 'https://api.unsplash.com//users/'+ data1 +'/likes',
          headers: 
          {
            Authorization: 'Bearer NSfsVQZSll-GhZFNLyMqAwB_zMmunFzjOarVTuXT4LQ',
            Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779'
          }
        }).as('response')
        .its('status')
        .should('eq', 200);
        cy.get('@response').then((responseValue) => {
          cy.writeFile('cypress/fixtures/photoid.json', responseValue.body)
        })
      })
   }
  ReadResultRespond()
  {
      cy.readFile("cypress/fixtures/photoid.json", () => {
      }).then((data) => {
        for (var index in data) {
          cy.request
          ({
            method: 'DELETE',
            url: 'https://api.unsplash.com/photos/'+ data[index].id +'/like',
            headers: {
              Authorization: 'Bearer NSfsVQZSll-GhZFNLyMqAwB_zMmunFzjOarVTuXT4LQ',
              Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779',
              'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "liked_by_user": false
              })            
            }).as('response')  
          
        }      
    })
  }
  GetCollectionIdAPI()
  {
      cy.readFile("cypress/fixtures/test.json", () => {
      }).then((data) => {
      const data1 = data.username1;
      cy.request({
        method: 'GET',
        url: 'https://api.unsplash.com//users/'+ data1 +'/collections',
        headers: {
          Authorization: 'Bearer NSfsVQZSll-GhZFNLyMqAwB_zMmunFzjOarVTuXT4LQ',
          Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779'
        }
      }).as('response')
      .its('status')
      .should('eq', 200);
      cy.get('@response').then((responseValue) => {
        cy.writeFile('cypress/fixtures/collectionId.json', responseValue.body)
      })
    })
}
RemoveCollectionIdFromAPI()
{
  cy.request({
      method: 'DELETE',
      url: 'https://api.unsplash.com//collections/abpciIEmpXM',
      headers: {
        Authorization: 'Bearer NSfsVQZSll-GhZFNLyMqAwB_zMmunFzjOarVTuXT4LQ',
        'Content-Type': 'application/json',
        Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779',
      }
    }).as('response')
    .its('status')
    .should('eq', 200);
  }
  //Download
TrackAPhotoDownloadAPI(){
        cy.readFile("cypress/fixtures/url.json", () => {
        }).then((data) => 
        {
          const data1 = data.endpoint;
          cy.log('ur','https://api.unsplash.com'+ data1 +'/download')
          cy.request(
          {
            method: 'GET',
            url: 'https://api.unsplash.com'+ data1 +'/download',
            headers: 
            {
              Authorization: 'Bearer NSfsVQZSll-GhZFNLyMqAwB_zMmunFzjOarVTuXT4LQ',
              'Content-Type': 'application/json',
              Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779'
            }
          }).as('response')
          .its('status')
          .should('eq', 200);
          cy.get('@response').then((responseValue) =>
          {
            cy.log('re',responseValue.body);
            cy.writeFile('cypress/fixtures/link.json', responseValue.body)
          })
      })
  }
  CheckImageLAPI(){
    cy.readFile("cypress/fixtures/link.json", () => {
    }).then((data) => 
    {
      const data1 = data.url;
      cy.log('ur','https://api.unsplash.com'+ data1 +'/download')
      cy.request(
      {
        method: 'GET',
        url: data1,
        headers: {
          Cookie: 'ugid=0ede8802b769d4e97a483e209535ca725535779'
        }
      }).as('response')
      .its('status')
      .should('eq', 200);
    })
}
}
  module.exports = new APIHelper();