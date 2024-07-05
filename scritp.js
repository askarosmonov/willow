const data = [
    {
        title:'08:30',
        image:"https://img.championat.com/c/900x900/news/big/s/l/krishtianu-ronaldu-mozhet-stat-futbolistom-pszh_1641899017510694378.jpg",
        description:"Ranalgo" 
    },
    {
     title:'10:40',
     image:"https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/1:1/w_2896,h_2896,c_limit/1442809583",
     description:"Messi",
    },
    {
      title:'11:90',
      image:"https://icdn.lenta.ru/images/2023/06/12/23/20230612234640309/square_320_1d6786b439438e233792fe045f8571c6.jpg",
      description:"Mbape",
    },
    {
     title:'07:30',
     image:"https://sport.news.am/static/news/b/2023/03/138976.jpg",
     description:"Holland"
    },
      {
        title:'06:30',
        image:"https://newafricanmagazine.com/wordpress/wp-content/uploads/2021/06/000_8WT63Q-scaled-e1623237506605.jpeg",
        description:"Benzama",
      },
      {
        title:'05:30',
        image:"https://img.championat.com/c/900x900/news/big/n/d/levandovski-o-molodyh-igrokah-barselony-oni-neveroyatno-talantlivy_1702010705849401829.jpg",
        description:"Lewandowski",
      },
      {
        title:'04:30',
        image:'https://cdnn21.img.ria.ru/images/07e6/07/01/1799670021_512:0:2560:2048_1920x0_80_0_0_647879f5eee789735945766f30e98c51.jpg',
        description:"Salax",
      },
      {
         title:'03:30',
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOa6KNYN7dKTynOs7Llh2k-3q5qEifqweq5DXzBYUMRsJaYo_f88fPcFTprzWmJLRQjI&usqp=CAU",
         description:"Mane",
      },
      {
        title:'02:30',
        image:"https://sputnik.kg/img/07e5/06/11/1052896137_478:0:1688:1332_1920x0_80_0_0_f589ea76c322ac7f2c880138cb1ad31f.jpg",
        description:"Ramos",
      },
    ]

    let container = document.createElement('div');
    container.classList.add('container')

    const renderBlock = () =>{
        let fragment = new DocumentFragment();
        data.map((item,id)=> {
        let block = document.createElement('biv');
        block.classList.add("block-item")
        block.setAttribute('colok-colok',id+1)
        block.innerHTML = `
        <div>${item.title}</div>
        <img width="150px" src=${item.image}>
        <div>${item.description}</div>`;
        fragment.append(block);
        })
        return fragment;
    };
    container.append(renderBlock());

    document.body.append(container);
    