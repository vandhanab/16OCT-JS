var arr = [
    {
        "id": 1,
        "title": "Beauty Cosmetics ",
        "price": 59.99,
        "description": "Purpose: Define the primary use, such as beautifying, preserving, or altering appearance.",
        "category": "cosmetics",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/10/356144042/VK/KX/MD/135520142/beauty-cosmetics-500x500.jpg",
        "rating": {
            "rate": 4.7,
            "count": 150
        }
    },
    {
        "id": 2,
        "title": "A collection of makeup and cosmetics items",
        "price":100.00,
        "description": "Benefits: List the main benefits (e.g., long-lasting, hydrating, lightweight)..",
        "category": "cosmetics",
        "image": "https://img.freepik.com/premium-photo/collection-makeup-cosmetics-items-table-with-blue-background_827765-619.jpg",
        "rating": {
            "rate": 5.5,
            "count": 240
        }
    },
    {
        "id": 3,
        "title": "Insight Cosmetics All Things Good Kit",
        "price": 88.50,
        "description": "Application Instructions: Include how to use the product effectively.",
        "category": "cosmetics",
        "image": "https://images-static.nykaa.com/media/catalog/product/0/d/0d7ef2eINSIG00000668_01n.jpg?tr=w-500",
        "rating": {
            "rate": 4.1,
            "count": 320
        }
    },
    {
        "id": 4,
        "title": "The Beauty Routine",
        "price": 99.99,
        "description": "Shade Range: If applicable, mention available shades or colors.",
        "category": "cosmetics",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQv3-UE30ahGuM6sR6CPdedUmLtJGt5n4GA&s",
        "rating": {
            "rate": 4.0,
            "count": 400
        }
    }
];

document.getElementById('id1').innerHTML = `
  <style>
      #id1 {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
      }
      .card {
          width: 18rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
      }
      .card img {
          width: 100%;
          height: auto;
      }
      .card-body {
          padding: 15px;
      }
  </style>
`;

var card = document.getElementById("id1");
var colors = ["lightpink", "lavender", "peachpuff", "lightsalmon", "lightcoral"];

function fun1() {
    for (i = 0; i < arr.length; i++) {
        card.innerHTML += `
        <section class="popular-places" id="popular" style="text-align: center;">
            <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular Places</small>
            <p style="font-weight: 650;">To Travel is to Live...</p>
            <div class="container text-center" style="background-color: ${colors[i % colors.length]};">
                <div class="row">  
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="${arr[i].image}" class="card-img-top" alt="Bracelet Image" style="width: 285px; height: 350px;">
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].title}</h5>
                                <a href="#" class="btn btn-primary">See More...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}