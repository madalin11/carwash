import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

declare var google: any; // Declare google to avoid TypeScript errors

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  map: any;

  private jsonUrl = 'assets/data.json';  // Update with your JSON file location
  private jsonData: any;

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

  ngOnInit() {
    this.initMap();
    this.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log('JSON Data:', this.jsonData);
    });
  }

  initMap() {
    // Set your map options (latitude, longitude, zoom level, etc.)
    const mapOptions = {
      center: { lat: 45.754396, lng: 21.227389 }, // Example: San Francisco
      zoom: 12,
    };

    // Create the map
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const v = [{
      'places': [
        {
          'location': {
            'latitude': 45.7489491, 'longitude': 21.226347699999998
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Rivière Brasserie', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.752237, 'longitude': 21.240345899999998
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Dinar Restaurant', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756436, 'longitude': 21.2419863
          }, 'displayName': {
            'text': 'Restaurant Merlot', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757526899999995, 'longitude': 21.2261161
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Locanda Del Corso', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7710589, 'longitude': 21.222255399999998
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Restaurant Tinecz Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757142099999996, 'longitude': 21.2287575
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Miorița', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7426643, 'longitude': 21.2382259
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Restaurant Sabres', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.775641, 'longitude': 21.2333006
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Pescada', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7566571, 'longitude': 21.2301645
          }, 'displayName': {
            'text': 'PASO Local Cuisine', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756451399999996, 'longitude': 21.2237864
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Berăria 700', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7326038, 'longitude': 21.2201426
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Casa Bunicii 1 Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.734124900000005, 'longitude': 21.202054
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Restaurant Nora', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7639151, 'longitude': 21.2259483
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Casa Antinori', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7564493, 'longitude': 21.228012
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Neața Omelette Bistro', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756769, 'longitude': 21.221857000000004
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Sky Restaurant', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7436153, 'longitude': 21.2230825
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Homemade', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756963899999995, 'longitude': 21.2277976
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': "Jack's Bistro", 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757624799999995, 'longitude': 21.2279815
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Balkan Bistro', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7582482, 'longitude': 21.225949699999997
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Little Hanoi - The Taste of Vietnam', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7578427, 'longitude': 21.2300041
          }, 'priceLevel': 'PRICE_LEVEL_EXPENSIVE', 'displayName': {
            'text': 'Pepper - Steak & Shake', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7488362, 'longitude': 21.226409
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Grădina Bănaţeană', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.752272, 'longitude': 21.224563699999997
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Massimo', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7645482, 'longitude': 21.2472803
          }, 'displayName': {
            'text': 'Terasa Hotel Pacific', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.734890199999995, 'longitude': 21.196904999999997
          }, 'displayName': {
            'text': 'Terasa Aurora', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7749982, 'longitude': 21.2388935
          }, 'displayName': {
            'text': 'Terasa Lucky Blacky', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7559331, 'longitude': 21.2317948
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Curtea Berarilor Timisoreana', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7342605, 'longitude': 21.1726112
          }, 'displayName': {
            'text': 'Terasa ATC', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7635359, 'longitude': 21.2844221
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Terasa Antik', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.734124900000005, 'longitude': 21.202054
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Restaurant Nora', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7489491, 'longitude': 21.226347699999998
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Rivière Brasserie', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754141100000005, 'longitude': 21.201437499999997
          }, 'displayName': {
            'text': 'Terasa Oana', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7500992, 'longitude': 21.220395999999997
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Porto Arte', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.743262699999995, 'longitude': 21.2370397
          }, 'displayName': {
            'text': 'Terasa Anonim', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7498347, 'longitude': 21.238363900000003
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'MGM Terasa', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7749671, 'longitude': 21.219704099999998
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Old House', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7479673, 'longitude': 21.2293466
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Anturaj', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7589733, 'longitude': 21.2299062
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'NARU', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.758406400000005, 'longitude': 21.229885499999998
          }, 'displayName': {
            'text': 'Le Dome', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.756616699999995, 'longitude': 21.2286485
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'The Scotland Yard', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7577703, 'longitude': 21.2300078
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'In Thyme', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7670919, 'longitude': 21.228247
          }, 'displayName': {
            'text': 'Magazin', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.733199299999995, 'longitude': 21.2096154
          }, 'displayName': {
            'text': 'BEST SHOP', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757276499999996, 'longitude': 21.228809800000004
          }, 'displayName': {
            'text': 'Amsterdam Shop', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.725756399999995, 'longitude': 21.198847699999998
          }, 'displayName': {
            'text': 'MIZAR - Shopping City Timișoara - Îmbrăcăminte și accesorii pentru femei', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7386704, 'longitude': 21.210162699999998
          }, 'displayName': {
            'text': 'Kik', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.765654, 'longitude': 21.227408099999998
          }, 'displayName': {
            'text': 'Showroom eMAG Timisoara Iulius Town', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7555154, 'longitude': 21.2298516
          }, 'displayName': {
            'text': 'U-man Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7319382, 'longitude': 21.258886
          }, 'displayName': {
            'text': 'Magazin', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756000799999995, 'longitude': 21.2303101
          }, 'displayName': {
            'text': 'Magazin Gang Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766371299999996, 'longitude': 21.2286769
          }, 'displayName': {
            'text': 'Nike Store', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7547001, 'longitude': 21.2275998
          }, 'displayName': {
            'text': 'EKLER', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754939, 'longitude': 21.2284873
          }, 'displayName': {
            'text': 'Zestrea Domnitei Ralu', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.753913999999995, 'longitude': 21.224781300000004
          }, 'displayName': {
            'text': 'Sofiaman', 'languageCode': 'fr'
          }
        },
        {
          'location': {
            'latitude': 45.725888999999995, 'longitude': 21.202717
          }, 'displayName': {
            'text': 'Pull&Bear', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7408011, 'longitude': 21.2146471
          }, 'displayName': {
            'text': 'Haine Gravide Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7665296, 'longitude': 21.229661399999998
          }, 'displayName': {
            'text': 'NEW YORKER', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7327753, 'longitude': 21.2104262
          }, 'displayName': {
            'text': 'Showroom eMAG Timisoara - Sagului', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7245862, 'longitude': 21.1989773
          }, 'displayName': {
            'text': 'HUMANIC I Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.755960300000005, 'longitude': 21.228341
          }, 'displayName': {
            'text': 'Samsonite Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754757999999995, 'longitude': 21.2268138
          }, 'displayName': {
            'text': 'Sc Mari Bil.srl(Timișoara souvenirs)', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.733584, 'longitude': 21.251924499999998
          }, 'displayName': {
            'text': 'Secondary School no. 30', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7589383, 'longitude': 21.2224188
          }, 'displayName': {
            'text': 'Scoala', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.779115499999996, 'longitude': 21.2363215
          }, 'displayName': {
            'text': "Saint Mary's Secondary School Number 7", 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.729308499999995, 'longitude': 21.2127898
          }, 'displayName': {
            'text': 'Școala Gimnazială nr. 2', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7248497, 'longitude': 21.209590499999997
          }, 'displayName': {
            'text': 'School Number 15', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.764122799999996, 'longitude': 21.2163042
          }, 'displayName': {
            'text': 'Middle School Number 18', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754133599999996, 'longitude': 21.2513316
          }, 'displayName': {
            'text': 'Scoala Generala Nr.1', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.762068500000005, 'longitude': 21.2106972
          }, 'displayName': {
            'text': 'Number 19 Middle School Avram Iancu', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7637207, 'longitude': 21.248082399999998
          }, 'displayName': {
            'text': 'Școala Gimnazială Nr. 21', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7324809, 'longitude': 21.203293400000003
          }, 'displayName': {
            'text': 'Scoala Gimnaziala 27', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.761005499999996, 'longitude': 21.2368086
          }, 'displayName': {
            'text': 'Secondary School Number 16', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.744213099999996, 'longitude': 21.209557399999998
          }, 'displayName': {
            'text': 'Școala Gimnazială nr. 12', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7267957, 'longitude': 21.2102663
          }, 'displayName': {
            'text': 'School Number 13', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.732921, 'longitude': 21.2336359
          }, 'displayName': {
            'text': 'Școala Gimnazială Nr. 25', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.763190599999994, 'longitude': 21.2491803
          }, 'displayName': {
            'text': 'Vincenţiu Babeş Middle School Number 21', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.765812399999994, 'longitude': 21.220795100000004
          }, 'displayName': {
            'text': 'Secondary School Number 24', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7394366, 'longitude': 21.197949599999998
          }, 'displayName': {
            'text': 'Scoala Generala Nr 6', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7659415, 'longitude': 21.217142199999998
          }, 'displayName': {
            'text': 'Secondary school 26', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.757733699999996, 'longitude': 21.2573006
          }, 'displayName': {
            'text': 'Școala Generală nr. 6', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7547973, 'longitude': 21.268425399999998
          }, 'displayName': {
            'text': 'Secondary School Rudolf Walther', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7370071, 'longitude': 21.2417975
          }, 'displayName': {
            'text': 'Timiş County Emergency Clinical Hospital', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7594431, 'longitude': 21.2267886
          }, 'displayName': {
            'text': 'Spitalul Clinic Municipal de Urgență Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757015599999995, 'longitude': 21.2253217
          }, 'displayName': {
            'text': 'Dr. Victor Popescu Military Emergency Hospital', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.753754199999996, 'longitude': 21.221789599999997
          }, 'displayName': {
            'text': 'Emergency Hospital for Children Louis Ţurcanu', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.749476099999995, 'longitude': 21.218526999999998
          }, 'displayName': {
            'text': 'Spitalul Clinic Căi Ferate', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.768713999999996, 'longitude': 21.259758599999998
          }, 'displayName': {
            'text': 'Victor Babeș Hospital', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7794375, 'longitude': 21.219655799999998
          }, 'displayName': {
            'text': 'Spital Premiere', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7589739, 'longitude': 21.226548899999997
          }, 'displayName': {
            'text': 'Clinical Hospital No. 1', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7457553, 'longitude': 21.2127084
          }, 'displayName': {
            'text': 'Spitalul oscar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.741778, 'longitude': 21.2166267
          }, 'displayName': {
            'text': 'Centrul de Chirurgia Obezității - Centrul Medical Sfânta Maria', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.749384899999995, 'longitude': 21.2183986
          }, 'displayName': {
            'text': 'Spitalul CFR', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7692665, 'longitude': 21.259267500000004
          }, 'displayName': {
            'text': 'Institute of Cardiovascular and Heart Diseases of Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.778889799999995, 'longitude': 21.2078374
          }, 'displayName': {
            'text': 'Spitalul Regional de Urgență (construcție abandonată)', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7406274, 'longitude': 21.223566599999998
          }, 'displayName': {
            'text': "Medici's Hospital", 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7450712, 'longitude': 21.214124299999998
          }, 'displayName': {
            'text': 'Spitalul odobescu maternitate', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7532429, 'longitude': 21.2206316
          }, 'displayName': {
            'text': 'Premature Neonatology Clinic,', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756367, 'longitude': 21.212570499999998
          }, 'displayName': {
            'text': 'Vessa Hospital', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7301613, 'longitude': 21.239523
          }, 'displayName': {
            'text': 'Jose Silva Clinic', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.736866299999996, 'longitude': 21.241369799999998
          }, 'displayName': {
            'text': 'Emergency Room', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.744326400000006, 'longitude': 21.215031
          }, 'displayName': {
            'text': 'Spitalul Clinic de Obstetrică-Ginecologie "Dr. Dumitru Popescu"', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7471195, 'longitude': 21.2316152
          }, 'displayName': {
            'text': 'West University of Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.782890099999996, 'longitude': 21.2168116
          }, 'displayName': {
            'text': 'Facultatea de Inginerie și Tehnologii Aplicate', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7603754, 'longitude': 21.2518439
          }, 'displayName': {
            'text': 'Facultatea de medicina', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7558055, 'longitude': 21.234290500000004
          }, 'displayName': {
            'text': 'Faculty of Dentistry UMFT', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7454951, 'longitude': 21.229845299999997
          }, 'displayName': {
            'text': 'Faculty of Architecture and Urbanism', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.747520699999995, 'longitude': 21.2314936
          }, 'displayName': {
            'text': 'Facultatea de Științe Politice, Filosofie și Științe ale Comunicării', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7537953, 'longitude': 21.2449075
          }, 'displayName': {
            'text': 'Faculty of Economics and Business Administration', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.74599490000001, 'longitude': 21.2256873
          }, 'displayName': {
            'text': 'Faculty of Mechanics - Polytechnic University of Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.746642099999995, 'longitude': 21.229796999999998
          }, 'displayName': {
            'text': 'Faculty of Physical Education and Sport', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7446676, 'longitude': 21.2522749
          }, 'displayName': {
            'text': 'Liceul Ioan Slavici', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7844052, 'longitude': 21.2174875
          }, 'displayName': {
            'text': 'Facultatea de Management și Turism Rural', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.745570199999996, 'longitude': 21.229878199999998
          }, 'displayName': {
            'text': 'Faculty of Communication Sciences', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7468758, 'longitude': 21.2304939
          }, 'displayName': {
            'text': 'Faculty of Mathematics and Informatics', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7457175, 'longitude': 21.222742099999998
          }, 'displayName': {
            'text': 'Facultatea de Management în Producţie şi Transporturi', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7474766, 'longitude': 21.2262281
          }, 'displayName': {
            'text': 'Faculty of Automation & Computer Science', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.76000880000001, 'longitude': 21.2307091
          }, 'displayName': {
            'text': 'Facultatea de Litere, Istorie si Teologie - spațiu Oituz', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7472242, 'longitude': 21.2277555
          }, 'displayName': {
            'text': 'Faculty of Electrical and Power Engineering', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.753639299999996, 'longitude': 21.225161399999998
          }, 'displayName': {
            'text': 'The Polytechnic University of Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756690299999995, 'longitude': 21.2367104
          }, 'displayName': {
            'text': 'Victor Babeş University of Medicine and Pharmacy', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.74688140000001, 'longitude': 21.2386949
          }, 'displayName': {
            'text': 'Faculty of Law of the West University of Timişoara', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.780768099999996, 'longitude': 21.240026
          }, 'displayName': {
            'text': 'Q Apartments Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7529622, 'longitude': 21.2149634
          }, 'displayName': {
            'text': 'City Of Mara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.726088399999995, 'longitude': 21.2679501
          }, 'displayName': {
            'text': 'Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7630939, 'longitude': 21.240424
          }, 'displayName': {
            'text': 'Vivalia Grand V5', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7757873, 'longitude': 21.212564399999998
          }, 'displayName': {
            'text': 'Campeador Residence', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7832161, 'longitude': 21.2465011
          }, 'displayName': {
            'text': 'Topband department', 'languageCode': 'zh'
          }
        },
        {
          'location': {
            'latitude': 45.7784495, 'longitude': 21.2257789
          }, 'displayName': {
            'text': 'Timişoara', 'languageCode': 'ru'
          }
        },
        {
          'location': {
            'latitude': 45.750842999999996, 'longitude': 21.2155557
          }, 'displayName': {
            'text': 'Paltim', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.781625999999996, 'longitude': 21.241957
          }, 'displayName': {
            'text': 'Complex Rio', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.778130499999996, 'longitude': 21.225786199999998
          }, 'displayName': {
            'text': 'Câmpina 1 Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.75990050000001, 'longitude': 21.1853887
          }, 'displayName': {
            'text': 'Toscana Residence', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.726594999999996, 'longitude': 21.1899117
          }, 'displayName': {
            'text': 'Apartamente Noi Timisoara Sulina Residence', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7491389, 'longitude': 21.2086592
          }, 'displayName': {
            'text': 'Apartamente 2 camere', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7739404, 'longitude': 21.249753899999998
          }, 'displayName': {
            'text': 'iHome', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7595387, 'longitude': 21.2433673
          }, 'displayName': {
            'text': 'Casa Timi', 'languageCode': 'it'
          }
        },
        {
          'location': {
            'latitude': 45.7652651, 'longitude': 21.2181297
          }, 'displayName': {
            'text': 'Bloc 30/2', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7423297, 'longitude': 21.2319153
          }, 'displayName': {
            'text': 'Bopæl i Timisoara', 'languageCode': 'da'
          }
        },
        {
          'location': {
            'latitude': 45.776602200000006, 'longitude': 21.2061162
          }, 'displayName': {
            'text': 'Robigo Residence by ETNS', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.782490599999996, 'longitude': 21.2245416
          }, 'displayName': {
            'text': 'Ansamblul Rezidențial Iris Armonia, Corp C D E', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.730894299999996, 'longitude': 21.2488378
          }, 'displayName': {
            'text': 'Apollo Complex', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7555398, 'longitude': 21.230547599999998
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.736341499999995, 'longitude': 21.244654099999998
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7460281, 'longitude': 21.2402861
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.73347, 'longitude': 21.2015732
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7674879, 'longitude': 21.2291833
          }, 'displayName': {
            'text': 'Auchan', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.732831, 'longitude': 21.212668
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7583349, 'longitude': 21.208976099999997
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7605723, 'longitude': 21.2201088
          }, 'displayName': {
            'text': 'Kaufland Timisoara - Cetate', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7566146, 'longitude': 21.222969
          }, 'displayName': {
            'text': 'Carrefour Express', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7857679, 'longitude': 21.2209561
          }, 'displayName': {
            'text': 'Auchan', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7775505, 'longitude': 21.235414799999997
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.765228, 'longitude': 21.218165
          }, 'displayName': {
            'text': 'Carrefour Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.703473200000005, 'longitude': 21.1897245
          }, 'displayName': {
            'text': 'Auchan', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.738528099999996, 'longitude': 21.2066232
          }, 'displayName': {
            'text': 'Profi City New', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.72530580000001, 'longitude': 21.2002505
          }, 'displayName': {
            'text': 'Carrefour', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.763099399999994, 'longitude': 21.252941900000003
          }, 'displayName': {
            'text': 'Lidl', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.739292, 'longitude': 21.212954000000003
          }, 'displayName': {
            'text': 'Kaufland', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7526067, 'longitude': 21.2255933
          }, 'displayName': {
            'text': 'Central Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7416894, 'longitude': 21.2249315
          }, 'priceLevel': 'PRICE_LEVEL_MODERATE', 'displayName': {
            'text': 'Profi Super', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.753844699999995, 'longitude': 21.2245526
          }, 'displayName': {
            'text': 'Mega Image', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7574547, 'longitude': 21.2240491
          }, 'displayName': {
            'text': 'Banca Românească', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.755111199999995, 'longitude': 21.2337404
          }, 'displayName': {
            'text': 'BNR', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7638721, 'longitude': 21.2564021
          }, 'displayName': {
            'text': 'Banca Românească', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.755069999999996, 'longitude': 21.22924
          }, 'displayName': {
            'text': 'CEC Bank', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.739502699999996, 'longitude': 21.2395633
          }, 'displayName': {
            'text': 'Banca Românească', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.749179600000005, 'longitude': 21.2081066
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.745525, 'longitude': 21.2123725
          }, 'displayName': {
            'text': 'CEC Bank', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7669116, 'longitude': 21.2272933
          }, 'displayName': {
            'text': 'Raiffeisen Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7654615, 'longitude': 21.229630399999998
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756687799999995, 'longitude': 21.221256399999998
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7610399, 'longitude': 21.2409116
          }, 'displayName': {
            'text': 'CEC Bank - Agentia NR.6 TIMISOARA', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7337499, 'longitude': 21.2014618
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7636665, 'longitude': 21.2511394
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7419126, 'longitude': 21.2252518
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.743883, 'longitude': 21.206917699999998
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7585863, 'longitude': 21.226371
          }, 'displayName': {
            'text': 'Railway Commercial Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.741130999999996, 'longitude': 21.2255236
          }, 'displayName': {
            'text': 'UniCredit Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.759426, 'longitude': 21.237114
          }, 'displayName': {
            'text': 'ING Bank Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.727810399999996, 'longitude': 21.2043243
          }, 'displayName': {
            'text': 'CEC Bank - Agentia NR.7 TIMISOARA', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.763614999999994, 'longitude': 21.2561183
          }, 'displayName': {
            'text': 'OTP Bank - Agentia Simion Barnutiu Timisoara', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7532207, 'longitude': 21.2240196
          }, 'displayName': {
            'text': 'ATM Ag.Libra TIMISOARA, TM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7551651, 'longitude': 21.2324524
          }, 'displayName': {
            'text': 'ATM Hotel Continental Timisoara, TM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7318232, 'longitude': 21.2376686
          }, 'displayName': {
            'text': 'ATM Multibanco', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.751098899999995, 'longitude': 21.2165498
          }, 'displayName': {
            'text': 'ATM First Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.764353799999995, 'longitude': 21.2588738
          }, 'displayName': {
            'text': 'ATM El Dorado,TM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7594753, 'longitude': 21.2385721
          }, 'displayName': {
            'text': 'Intesa Sanpaolo Bank ATM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7553562, 'longitude': 21.2306392
          }, 'displayName': {
            'text': 'OTP ATM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.766923999999996, 'longitude': 21.228517999999998
          }, 'displayName': {
            'text': 'ATM Iulius Mall,TM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7559129, 'longitude': 21.2323488
          }, 'displayName': {
            'text': 'Intesa Sanpaolo Bank ATM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7389161, 'longitude': 21.2178631
          }, 'displayName': {
            'text': 'Raiffeisen Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.752551, 'longitude': 21.2255407
          }, 'displayName': {
            'text': 'Raiffeisen Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7582418, 'longitude': 21.223029
          }, 'displayName': {
            'text': 'ATM Credit Europe Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7852135, 'longitude': 21.2381592
          }, 'displayName': {
            'text': 'OTP Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.767173899999996, 'longitude': 21.2288046
          }, 'displayName': {
            'text': 'ATM Bitcoin Romania - Auchan IULIUS Mall', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756974, 'longitude': 21.221857000000004
          }, 'displayName': {
            'text': 'Raiffeisen Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.734761, 'longitude': 21.2671697
          }, 'displayName': {
            'text': 'Raiffeisen Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7655057, 'longitude': 21.2600736
          }, 'displayName': {
            'text': 'ATM Ag.Libra TIMISOARA2,TM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.733305, 'longitude': 21.257523
          }, 'displayName': {
            'text': 'BCR', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7759498, 'longitude': 21.237076599999998
          }, 'displayName': {
            'text': 'OTP Bank', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7535371, 'longitude': 21.223918899999997
          }, 'displayName': {
            'text': 'Banca Transilvania', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.751507, 'longitude': 21.225056
          }, 'displayName': {
            'text': 'Flori in Timisoara.eu', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7379714, 'longitude': 21.2383222
          }, 'displayName': {
            'text': 'Floraria Crina - Florarie Timisoara. Flori, Buchete Flori, Livrare Flori, Aranjamente Florale Timisoara. Buchete Mireasa',
            'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7336908, 'longitude': 21.2501678
          }, 'displayName': {
            'text': 'Floraria Soarelui', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.740384899999995, 'longitude': 21.2226712
          }, 'displayName': {
            'text': 'Florăria D-Dea', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7616121, 'longitude': 21.2479242
          }, 'displayName': {
            'text': 'floraria emma', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.766160199999995, 'longitude': 21.227326899999998
          }, 'displayName': {
            'text': 'Floare de colț', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.725565499999995, 'longitude': 21.1983435
          }, 'displayName': {
            'text': 'Floare de Colț', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7310474, 'longitude': 21.210511699999998
          }, 'displayName': {
            'text': 'FLORARIA MARGARETA', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7609522, 'longitude': 21.2100229
          }, 'displayName': {
            'text': 'Floraria Essenza', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.762719700000005, 'longitude': 21.2488932
          }, 'displayName': {
            'text': 'Floraria Minola', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7239795, 'longitude': 21.1995352
          }, 'displayName': {
            'text': 'Florăria Flori In Culori', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766459999999995, 'longitude': 21.228761
          }, 'displayName': {
            'text': 'Floraria Lotus', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.755695599999996, 'longitude': 21.230549
          }, 'displayName': {
            'text': 'EDEN FLORĂRIE', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.755539999999996, 'longitude': 21.230548
          }, 'displayName': {
            'text': 'Florăria Felice Shop', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7621422, 'longitude': 21.213561400000003
          }, 'displayName': {
            'text': 'Floraria Nr. 5 Sc. Horticultura Sa.', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.785831800000004, 'longitude': 21.2212997
          }, 'displayName': {
            'text': 'Floare de Colț', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7256545, 'longitude': 21.1985012
          }, 'displayName': {
            'text': 'Florăria Magnolia Timișoara (Shopping City)', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.779266, 'longitude': 21.2121773
          }, 'displayName': {
            'text': "Floraria Sophie's Fab Flowers", 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7669644, 'longitude': 21.2287188
          }, 'displayName': {
            'text': 'Floraria Flori In Culori Iulius', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.772506299999996, 'longitude': 21.244806999999998
          }, 'displayName': {
            'text': 'Blooming Box - Florarie Online', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7669338, 'longitude': 21.228271499999998
          }, 'displayName': {
            'text': 'Iulius Town', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7239795, 'longitude': 21.1995352
          }, 'displayName': {
            'text': 'Shopping City Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7554891, 'longitude': 21.2304757
          }, 'displayName': {
            'text': 'Bega Shopping Center', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7677078, 'longitude': 21.2306957
          }, 'displayName': {
            'text': 'Galeria 1', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7681633, 'longitude': 21.2337691
          }, 'displayName': {
            'text': 'Euro Center', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7857213, 'longitude': 21.220694899999998
          }, 'displayName': {
            'text': 'Centrul Comercial Auchan Timișoara Nord', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7758162, 'longitude': 21.228470599999998
          }, 'displayName': {
            'text': 'Calea Sagului , Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7396167, 'longitude': 21.220843
          }, 'displayName': {
            'text': 'REAL CIP SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7669644, 'longitude': 21.2287188
          }, 'displayName': {
            'text': 'Chantia Iulius Mall', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7686035, 'longitude': 21.2329499
          }, 'displayName': {
            'text': 'Kapa Shopping Center', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.730677199999995, 'longitude': 21.247884799999998
          }, 'displayName': {
            'text': 'SUD Plaza', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.733677, 'longitude': 21.199867599999997
          }, 'displayName': {
            'text': 'Centrul Comercial Dallas', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.707642, 'longitude': 21.18815
          }, 'displayName': {
            'text': 'Aushopping Șagului', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7581076, 'longitude': 21.2229493
          }, 'displayName': {
            'text': '700 Office', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7405875, 'longitude': 21.258122099999998
          }, 'displayName': {
            'text': 'Funshop Park', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.757787799999996, 'longitude': 21.2183943
          }, 'displayName': {
            'text': 'Timco Retail Park', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.738726799999995, 'longitude': 21.216160199999997
          }, 'displayName': {
            'text': 'Andra', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7567078, 'longitude': 21.223113599999998
          }, 'displayName': {
            'text': 'CHINA SHOPPING CITY', 'languageCode': 'zh'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7471195, 'longitude': 21.2316152
          }, 'displayName': {
            'text': 'West University of Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.782890099999996, 'longitude': 21.2168116
          }, 'displayName': {
            'text': 'Facultatea de Inginerie și Tehnologii Aplicate', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7603754, 'longitude': 21.2518439
          }, 'displayName': {
            'text': 'Facultatea de medicina', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7558055, 'longitude': 21.234290500000004
          }, 'displayName': {
            'text': 'Faculty of Dentistry UMFT', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7454951, 'longitude': 21.229845299999997
          }, 'displayName': {
            'text': 'Faculty of Architecture and Urbanism', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.747520699999995, 'longitude': 21.2314936
          }, 'displayName': {
            'text': 'Facultatea de Științe Politice, Filosofie și Științe ale Comunicării', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7537953, 'longitude': 21.2449075
          }, 'displayName': {
            'text': 'Faculty of Economics and Business Administration', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.74599490000001, 'longitude': 21.2256873
          }, 'displayName': {
            'text': 'Faculty of Mechanics - Polytechnic University of Timișoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.746642099999995, 'longitude': 21.229796999999998
          }, 'displayName': {
            'text': 'Faculty of Physical Education and Sport', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7446676, 'longitude': 21.2522749
          }, 'displayName': {
            'text': 'Liceul Ioan Slavici', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7844052, 'longitude': 21.2174875
          }, 'displayName': {
            'text': 'Facultatea de Management și Turism Rural', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.745570199999996, 'longitude': 21.229878199999998
          }, 'displayName': {
            'text': 'Faculty of Communication Sciences', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7468758, 'longitude': 21.2304939
          }, 'displayName': {
            'text': 'Faculty of Mathematics and Informatics', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7457175, 'longitude': 21.222742099999998
          }, 'displayName': {
            'text': 'Facultatea de Management în Producţie şi Transporturi', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7474766, 'longitude': 21.2262281
          }, 'displayName': {
            'text': 'Faculty of Automation & Computer Science', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.76000880000001, 'longitude': 21.2307091
          }, 'displayName': {
            'text': 'Facultatea de Litere, Istorie si Teologie - spațiu Oituz', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7472242, 'longitude': 21.2277555
          }, 'displayName': {
            'text': 'Faculty of Electrical and Power Engineering', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.753639299999996, 'longitude': 21.225161399999998
          }, 'displayName': {
            'text': 'The Polytechnic University of Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756690299999995, 'longitude': 21.2367104
          }, 'displayName': {
            'text': 'Victor Babeş University of Medicine and Pharmacy', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.74688140000001, 'longitude': 21.2386949
          }, 'displayName': {
            'text': 'Faculty of Law of the West University of Timişoara', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7465739, 'longitude': 21.215459199999998
          }, 'displayName': {
            'text': 'iDroid - Service Reparatii TV LED & Telefoane GSM | Laptop | PS5 Xbox - Samsung / iPhone Timisoara',
            'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.765949899999995, 'longitude': 21.260244999999998
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.735345099999996, 'longitude': 21.237631999999998
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.751323899999996, 'longitude': 21.213824
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.728659099999994, 'longitude': 21.2063366
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.734601, 'longitude': 21.248943999999998
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.772123, 'longitude': 21.222766
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.761296099999996, 'longitude': 21.2159024
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756034, 'longitude': 21.239510799999998
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.736767500000006, 'longitude': 21.2032132
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7343955, 'longitude': 21.2009141
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.732724, 'longitude': 21.2103681
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.746069, 'longitude': 21.238115999999998
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7350657, 'longitude': 21.2380939
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.729006999999996, 'longitude': 21.180723
          }, 'displayName': {
            'text': 'Casa Pariurilor', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7458761, 'longitude': 21.212770199999998
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.76555, 'longitude': 21.2600801
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7703515, 'longitude': 21.219241999999998
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.742892, 'longitude': 21.213006999999998
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7771098, 'longitude': 21.2204634
          }, 'displayName': {
            'text': 'Superbet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7739553, 'longitude': 21.221148
          }, 'displayName': {
            'text': 'Bet One', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7499031, 'longitude': 21.2017061
          }, 'displayName': {
            'text': 'Statia CF Timisoara Nord', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.713968799999996, 'longitude': 21.193576699999998
          }, 'displayName': {
            'text': 'Lukoil', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7697, 'longitude': 21.23086
          }, 'displayName': {
            'text': 'OMV', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.729825399999996, 'longitude': 21.2196905
          }, 'displayName': {
            'text': 'Petrom', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.750588, 'longitude': 21.2097241
          }, 'displayName': {
            'text': 'OMV', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.74190000000001, 'longitude': 21.2384
          }, 'displayName': {
            'text': 'OMV', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7528283, 'longitude': 21.254827900000002
          }, 'displayName': {
            'text': 'Petrom', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.76788, 'longitude': 21.221880000000002
          }, 'displayName': {
            'text': 'PETROM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.738595, 'longitude': 21.241996
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7745452, 'longitude': 21.213821300000003
          }, 'displayName': {
            'text': 'PETROM', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.718128799999995, 'longitude': 21.1962257
          }, 'displayName': {
            'text': 'Petrom', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7467087, 'longitude': 21.2409507
          }, 'displayName': {
            'text': 'Lukoil', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.752375, 'longitude': 21.218121099999998
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7326786, 'longitude': 21.2183745
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.769635099999995, 'longitude': 21.2228896
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.74802, 'longitude': 21.243209999999998
          }, 'displayName': {
            'text': 'OMV', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7813635, 'longitude': 21.2201558
          }, 'displayName': {
            'text': 'OMV', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.732648, 'longitude': 21.2110594
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7856634, 'longitude': 21.218397
          }, 'displayName': {
            'text': 'MOL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.769033799999995, 'longitude': 21.2676126
          }, 'displayName': {
            'text': 'Lukoil', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7208702, 'longitude': 21.2363116
          }, 'displayName': {
            'text': 'ESO Gas Station', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7476583, 'longitude': 21.2423601
          }, 'displayName': {
            'text': 'Amanet Non Stop Timisoara Complex, Electronice, Masini, Ceasuri, Diamante, Aur',
            'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7561324, 'longitude': 21.2235052
          }, 'displayName': {
            'text': 'BSG Amanet', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.744799099999994, 'longitude': 21.2099755
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7454537, 'longitude': 21.2369053
          }, 'displayName': {
            'text': 'Pawn Trendgold SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.775610099999994, 'longitude': 21.2381636
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.728693899999996, 'longitude': 21.2063781
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7574069, 'longitude': 21.2493206
          }, 'displayName': {
            'text': 'TooM Amanet', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.768473, 'longitude': 21.214461
          }, 'displayName': {
            'text': 'AmanetBKG - casa amanet Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7322444, 'longitude': 21.2600107
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.738478799999996, 'longitude': 21.216285
          }, 'displayName': {
            'text': 'BVX AMANET', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7278897, 'longitude': 21.205383599999998
          }, 'displayName': {
            'text': 'BKG Amanet', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.759313, 'longitude': 21.2498383
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7411756, 'longitude': 21.2245094
          }, 'displayName': {
            'text': 'AmanetBKG - casa amanet Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.745447999999996, 'longitude': 21.2543599
          }, 'displayName': {
            'text': 'Amanet BKG', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7613728, 'longitude': 21.2479317
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7350619, 'longitude': 21.238080099999998
          }, 'displayName': {
            'text': 'BKG Amanet', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7646668, 'longitude': 21.259377
          }, 'displayName': {
            'text': 'AGP Amanet', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7752731, 'longitude': 21.238487
          }, 'displayName': {
            'text': 'BKG Amanet', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7618714, 'longitude': 21.2142348
          }, 'displayName': {
            'text': 'BSG Amanet & Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7660705, 'longitude': 21.260870900000004
          }, 'displayName': {
            'text': 'BKG Amanet', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7465932, 'longitude': 21.2394328
          }, 'displayName': {
            'text': 'Exchange Office', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7640892, 'longitude': 21.2191389
          }, 'displayName': {
            'text': 'Schimb valutar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7561186, 'longitude': 21.223346
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR TABRIZI', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7694073, 'longitude': 21.2329064
          }, 'displayName': {
            'text': 'Schimb Valutar Narcos', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7543339, 'longitude': 21.226536400000004
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR JABRI EXCHANGE', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7536567, 'longitude': 21.2247052
          }, 'displayName': {
            'text': 'Tabrizi Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754842599999996, 'longitude': 21.226622400000004
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR TABRIZI', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.768275599999996, 'longitude': 21.2369578
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR TABRIZI', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7552848, 'longitude': 21.235128
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR JABRI SHARIF', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.754010199999996, 'longitude': 21.226396599999998
          }, 'displayName': {
            'text': 'Tabrizi', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.724705, 'longitude': 21.199531399999998
          }, 'displayName': {
            'text': 'Tabrizi', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7254478, 'longitude': 21.198291599999997
          }, 'displayName': {
            'text': 'Jabri Exchange Shopping City', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.703622300000006, 'longitude': 21.1899819
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR JABRI AUCHAN SAGULUI', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.726672699999995, 'longitude': 21.198116300000002
          }, 'displayName': {
            'text': 'CASA DE SCHIMB VALUTAR TABRIZI S.R.L. - DEDEMAN', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766410799999996, 'longitude': 21.229148799999997
          }, 'displayName': {
            'text': 'Jabri', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7680971, 'longitude': 21.223525700000003
          }, 'displayName': {
            'text': 'Strelitia Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7870135, 'longitude': 21.222619899999998
          }, 'displayName': {
            'text': 'Jabri Exchange', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.740313, 'longitude': 21.214929299999998
          }, 'displayName': {
            'text': 'Schimb Valutar C.B. AMANET', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7350809, 'longitude': 21.2489523
          }, 'displayName': {
            'text': 'Schimb Valutar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7880643, 'longitude': 21.2376286
          }, 'displayName': {
            'text': 'Schimb valutar Andi', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7569642, 'longitude': 21.238192
          }, 'displayName': {
            'text': 'Copy market -Xerox', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7550375, 'longitude': 21.223417200000004
          }, 'displayName': {
            'text': 'Copy Center Xerox', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.746765599999996, 'longitude': 21.238125699999998
          }, 'displayName': {
            'text': 'Copy Market - xerox Garaje căminele 3-7',
            'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7466559, 'longitude': 21.237503699999998
          }, 'displayName': {
            'text': 'Copy shop complex', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7734794, 'longitude': 21.244916
          }, 'displayName': {
            'text': 'Copiere Chei, Xerox, Tocilarie, B-Dayan', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.750190499999995, 'longitude': 21.238615199999998
          }, 'displayName': {
            'text': 'Copy Shop', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.746699899999996, 'longitude': 21.237930499999997
          }, 'displayName': {
            'text': 'La Mihai Complex', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7465664, 'longitude': 21.237253199999998
          }, 'displayName': {
            'text': 'Printkop Xerox', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7481685, 'longitude': 21.241202400000002
          }, 'displayName': {
            'text': 'Printtech S.R.L.', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7537172, 'longitude': 21.2418241
          }, 'displayName': {
            'text': 'Activ Birotic Center Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.747579, 'longitude': 21.2420673
          }, 'displayName': {
            'text': 'Copy Expert', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.736512, 'longitude': 21.2096013
          }, 'displayName': {
            'text': 'Rastero Gifts SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.757477900000005, 'longitude': 21.2384369
          }, 'displayName': {
            'text': 'Xerox Garaj Medicina și Farmacie', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.725522399999996, 'longitude': 21.1981178
          }, 'displayName': {
            'text': 'TOPRO', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.730119699999996, 'longitude': 21.249877299999998
          }, 'displayName': {
            'text': 'Euro Print Shop SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.765558, 'longitude': 21.2231334
          }, 'displayName': {
            'text': 'Doctor Print', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7566448, 'longitude': 21.238493800000004
          }, 'displayName': {
            'text': 'Xerox', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.751507, 'longitude': 21.2250555
          }, 'displayName': {
            'text': 'Xerox Mediak', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7651913, 'longitude': 21.224692599999997
          }, 'displayName': {
            'text': 'TOPRO', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7581076, 'longitude': 21.2229493
          }, 'displayName': {
            'text': 'Copiatoare second XEROX Timisoara', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7581553, 'longitude': 21.228320099999998
          }, 'displayName': {
            'text': 'Toaletă publică', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.753659, 'longitude': 21.22617
          }, 'displayName': {
            'text': 'Toaletă publică', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7496223, 'longitude': 21.219774599999997
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7518708, 'longitude': 21.222650899999998
          }, 'displayName': {
            'text': 'Grand Park Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7565992, 'longitude': 21.2235056
          }, 'displayName': {
            'text': 'Toaleta Piata 700', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7305244, 'longitude': 21.210095199999998
          }, 'displayName': {
            'text': 'Toaleta Piata Doina', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.750042699999995, 'longitude': 21.2332742
          }, 'displayName': {
            'text': 'Toaletă publică', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7469168, 'longitude': 21.2090887
          }, 'displayName': {
            'text': 'Toaleta publica', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7500013, 'longitude': 21.2061027
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7541942, 'longitude': 21.2377303
          }, 'displayName': {
            'text': 'Toaletă publică', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7446615, 'longitude': 21.2073908
          }, 'displayName': {
            'text': 'Toaleta Piata Iosefin / subsol 1 leu', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7413977, 'longitude': 21.2249955
          }, 'displayName': {
            'text': 'Toaleta publica Piata Balcescu', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7590408, 'longitude': 21.224432099999998
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.757757999999995, 'longitude': 21.2497132
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7606077, 'longitude': 21.2491645
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7436395, 'longitude': 21.2069413
          }, 'displayName': {
            'text': 'Toaletă Publică', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766422999999996, 'longitude': 21.299283
          }, 'displayName': {
            'text': 'WC', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7603353, 'longitude': 21.2585381
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.761852999999995, 'longitude': 21.2528899
          }, 'displayName': {
            'text': 'Toilets', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.733072299999996, 'longitude': 21.2174352
          }, 'displayName': {
            'text': 'Piscina', 'languageCode': 'it'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7355407, 'longitude': 21.2376652
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.749797699999995, 'longitude': 21.2454249
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7716879, 'longitude': 21.2236026
          }, 'displayName': {
            'text': 'Alimentară', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7322375, 'longitude': 21.228635399999998
          }, 'displayName': {
            'text': 'Alimentara Orient', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7366859, 'longitude': 21.2370262
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7470175, 'longitude': 21.262709899999997
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7312365, 'longitude': 21.208873999999998
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.723385799999996, 'longitude': 21.224826200000003
          }, 'displayName': {
            'text': 'magazin alimentar La Colt', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.748323199999994, 'longitude': 21.2192223
          }, 'displayName': {
            'text': 'DISSIL 2010 SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7526067, 'longitude': 21.2255933
          }, 'displayName': {
            'text': 'Central Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766979299999996, 'longitude': 21.2067247
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.73394950000001, 'longitude': 21.2380682
          }, 'displayName': {
            'text': 'Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7646741, 'longitude': 21.2491339
          }, 'displayName': {
            'text': 'Mini Market', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7311459, 'longitude': 21.256443299999997
          }, 'displayName': {
            'text': 'Magazin alimentar mixt', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7778711, 'longitude': 21.2345535
          }, 'displayName': {
            'text': 'Butic', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7714764, 'longitude': 21.2232536
          }, 'displayName': {
            'text': 'Magazin alimentar Ship&Go Cargus', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7479381, 'longitude': 21.261798199999998
          }, 'displayName': {
            'text': 'Schnel&Toll Srl', 'languageCode': 'de'
          }
        },
        {
          'location': {
            'latitude': 45.7598023, 'longitude': 21.2493358
          }, 'displayName': {
            'text': 'Aprozar - Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7598042, 'longitude': 21.2286267
          }, 'displayName': {
            'text': 'Casa Romaneasca', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7297349, 'longitude': 21.222424399999998
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.750783000000006, 'longitude': 21.207714
          }, 'displayName': {
            'text': 'Timișoara Nord', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7666529, 'longitude': 21.2443641
          }, 'displayName': {
            'text': 'Timișoara Est', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.726017399999996, 'longitude': 21.1718506
          }, 'displayName': {
            'text': 'Timișoara Vest', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7504, 'longitude': 21.207150000000002
          }, 'displayName': {
            'text': 'Gara Timisoara Nord', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7513133, 'longitude': 21.2078019
          }, 'displayName': {
            'text': 'Gara de Nord Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7161085, 'longitude': 21.2029966
          }, 'displayName': {
            'text': 'Timișoara Sud', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.75042, 'longitude': 21.20686
          }, 'displayName': {
            'text': 'Gara Timișoara Nord', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7666985, 'longitude': 21.2453039
          }, 'displayName': {
            'text': 'Gara Timisoara Est', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.750364999999995, 'longitude': 21.20741
          }, 'displayName': {
            'text': 'Gara Timisoara Nord', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7669147, 'longitude': 21.244905
          }, 'displayName': {
            'text': 'Gara Timisoara Est', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.766639999999995, 'longitude': 21.24502
          }, 'displayName': {
            'text': 'Gara Timișoara Est', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.75036, 'longitude': 21.20816
          }, 'displayName': {
            'text': 'Gara Timișoara Nord', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7502, 'longitude': 21.20796
          }, 'displayName': {
            'text': 'Gara de Nord', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7563329, 'longitude': 21.253158100000004
          }, 'displayName': {
            'text': 'Fabric', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7963932, 'longitude': 21.2354789
          }, 'displayName': {
            'text': 'Dorel Tripon', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7771632, 'longitude': 21.2322796
          }, 'displayName': {
            'text': 'Joburi Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7329303, 'longitude': 21.2644585
          }, 'displayName': {
            'text': 'Continental Automotive Romania - F / Electrotimis 2', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7539297, 'longitude': 21.223408
          }, 'displayName': {
            'text': 'Timisale S.R.L.', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7561853, 'longitude': 21.2449205
          }, 'displayName': {
            'text': 'IHM Total Consult', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.754224, 'longitude': 21.247346
          }, 'displayName': {
            'text': 'HagiuPRO Consulting', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7654052, 'longitude': 21.2307243
          }, 'displayName': {
            'text': 'Toluna Office', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.6977232, 'longitude': 21.1875871
          }, 'displayName': {
            'text': 'Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7310549, 'longitude': 21.2692428
          }, 'displayName': {
            'text': 'Locuri de munca Timisoara - Delcase', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7465201, 'longitude': 21.2205972
          }, 'displayName': {
            'text': 'Restart Energy', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7739573, 'longitude': 21.259190699999998
          }, 'displayName': {
            'text': 'Linde Gaz România', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7575209, 'longitude': 21.2313695
          }, 'displayName': {
            'text': 'Timis Online', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.755937499999995, 'longitude': 21.2318836
          }, 'displayName': {
            'text': 'Opinia Timișoarei', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7805501, 'longitude': 21.220730700000004
          }, 'displayName': {
            'text': 'ARTOIL SRL', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.744305, 'longitude': 21.2214709
          }, 'displayName': {
            'text': 'HORETIM', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7574451, 'longitude': 21.2277111
          }, 'displayName': {
            'text': 'Etea Grain SRL', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7739342, 'longitude': 21.2213946
          }, 'displayName': {
            'text': 'RWA Raiffesen Agro România SRL', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7742201, 'longitude': 21.2583234
          }, 'displayName': {
            'text': 'Continental Automotive Products', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7576268, 'longitude': 21.2240483
          }, 'displayName': {
            'text': 'eta2u', 'languageCode': 'ro'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7368307, 'longitude': 21.2051773
          }, 'displayName': {
            'text': 'Firma constructii Timisoara', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.756509099999995, 'longitude': 21.2278163
          }, 'displayName': {
            'text': 'INFIINTARE FIRMA TIMISOARA | GAZDUIRE SEDIU SOCIAL', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.753087, 'longitude': 21.225987
          }, 'displayName': {
            'text': 'FläktGroup Romania SRL', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.719521799999995, 'longitude': 21.2312393
          }, 'displayName': {
            'text': 'Firma curatenie Timisoara - Servicii de curatenie la birouri si echipamente industriale - CoClean',
            'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7031352, 'longitude': 21.184961899999998
          }, 'displayName': {
            'text': 'Allflex Romania SRL', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.8007953, 'longitude': 21.171118699999997
          }, 'displayName': {
            'text': 'Flex LTD', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.735189999999996, 'longitude': 21.201636999999998
          }, 'displayName': {
            'text': 'Firma de Web Design Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.741471499999996, 'longitude': 21.2353882
          }, 'displayName': {
            'text': 'Atag Office - Firma de contabilitate Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.726520199999996, 'longitude': 21.1907458
          }, 'displayName': {
            'text': 'Jomo', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7540243, 'longitude': 21.2518148
          }, 'displayName': {
            'text': 'Speed Moving Timisoara mutari mobila locuinte firme', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7583499, 'longitude': 21.2307845
          }, 'displayName': {
            'text': 'Firma Curatenie Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7556958, 'longitude': 21.223294799999998
          }, 'displayName': {
            'text': 'Corsim', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7635578, 'longitude': 21.233189
          }, 'displayName': {
            'text': 'Oxyconfort - Firme curatenie Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.747409399999995, 'longitude': 21.218636999999998
          }, 'displayName': {
            'text': 'Lună Şi Bec S.R.L', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7644502, 'longitude': 21.2492095
          }, 'displayName': {
            'text': 'Perseverent Company - Vanzari si montaj termopan Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7567558, 'longitude': 21.2082363
          }, 'displayName': {
            'text': 'Gi Group Timisoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7406173, 'longitude': 21.263745699999998
          }, 'displayName': {
            'text': 'Azur S.A', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7103056, 'longitude': 21.2356049
          }, 'displayName': {
            'text': 'Elkoplast Romania', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7364755, 'longitude': 21.268333
          }, 'displayName': {
            'text': 'Continental Corp D. UC', 'languageCode': 'en'
          }
        }
        ,
        {
          'location': {
            'latitude': 45.7631406, 'longitude': 21.260060499999998
          }, 'displayName': {
            'text': 'Market food store "Rio del Sol"', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7312365, 'longitude': 21.208873999999998
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7355407, 'longitude': 21.2376652
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7470175, 'longitude': 21.262709899999997
          }, 'displayName': {
            'text': 'Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.749797699999995, 'longitude': 21.2454249
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.744156000000004, 'longitude': 21.2077834
          }, 'displayName': {
            'text': 'Curtici', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7341748, 'longitude': 21.2387515
          }, 'displayName': {
            'text': 'Timișoara', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.748314699999995, 'longitude': 21.2192325
          }, 'displayName': {
            'text': 'Mini Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7410873, 'longitude': 21.224952299999998
          }, 'displayName': {
            'text': 'Ana Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.761787299999995, 'longitude': 21.2487986
          }, 'displayName': {
            'text': 'Curtici', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7366859, 'longitude': 21.2370262
          }, 'displayName': {
            'text': 'Magazin alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7598023, 'longitude': 21.2493358
          }, 'displayName': {
            'text': 'Aprozar - Magazin Alimentar', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7657843, 'longitude': 21.218743399999997
          }, 'displayName': {
            'text': 'All for Nature - Distribuitor Vivanatura', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7322375, 'longitude': 21.228635399999998
          }, 'displayName': {
            'text': 'Alimentara Orient', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7604524, 'longitude': 21.219755799999998
          }, 'displayName': {
            'text': 'Produse naturiste', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7362397, 'longitude': 21.2047806
          }, 'displayName': {
            'text': 'Prima Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7508883, 'longitude': 21.2437847
          }, 'displayName': {
            'text': 'Mini Market', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7716879, 'longitude': 21.2236026
          }, 'displayName': {
            'text': 'Alimentară', 'languageCode': 'ro'
          }
        },
        {
          'location': {
            'latitude': 45.7553282, 'longitude': 21.222979499999997
          }, 'displayName': {
            'text': 'All for Nature', 'languageCode': 'en'
          }
        },
        {
          'location': {
            'latitude': 45.7423187, 'longitude': 21.2131009
          }, 'displayName': {
            'text': 'Ciobănașul-Sibian', 'languageCode': 'ro'
          }
        }
      ]
    }]
    // You can add markers, polygons, etc. here...
    // Example marker:
    const locations = v[0]['places'];

    const generatedLocations = [{
      'location': {
        'latitude': 45.818589409877035,
        'longitude': 21.29563889404704
      }
    }, {
      'location': {
        'latitude': 45.76905276830126,
        'longitude': 21.282325521236906
      }
    }, {
      'location': {
        'latitude': 45.74943562417504,
        'longitude': 21.124575334226694
      }
    }, {
      'location': {
        'latitude': 45.72692599516359,
        'longitude': 21.11206491305246
      }
    }, {
      'location': {
        'latitude': 45.81730252065354,
        'longitude': 21.18854953561397
      }
    }, {
      'location': {
        'latitude': 45.80494000608293,
        'longitude': 21.190049191052335
      }
    }, {
      'location': {
        'latitude': 45.78685535315309,
        'longitude': 21.242547858800325
      }
    }, {
      'location': {
        'latitude': 45.69541288806981,
        'longitude': 21.26334976273614
      }
    }, {
      'location': {
        'latitude': 45.82265114436923,
        'longitude': 21.271006314129934
      }
    }, {
      'location': {
        'latitude': 45.77156247534368,
        'longitude': 21.23692892718681
      }
    }, {
      'location': {
        'latitude': 45.79898229266642,
        'longitude': 21.315971546105345
      }
    }, {
      'location': {
        'latitude': 45.71020060984862,
        'longitude': 21.2797772818599
      }
    }, {
      'location': {
        'latitude': 45.75431226332969,
        'longitude': 21.280509321871023
      }
    }, {
      'location': {
        'latitude': 45.79271822565168,
        'longitude': 21.222489394623917
      }
    }, {
      'location': {
        'latitude': 45.69002983207335,
        'longitude': 21.208505323189765
      }
    }, {
      'location': {
        'latitude': 45.69357469985578,
        'longitude': 21.295751643249844
      }
    }, {
      'location': {
        'latitude': 45.75295261205203,
        'longitude': 21.301643011375642
      }
    }, {
      'location': {
        'latitude': 45.823800723872914,
        'longitude': 21.192005008932682
      }
    }, {
      'location': {
        'latitude': 45.693559693596406,
        'longitude': 21.311078747131415
      }
    }, {
      'location': {
        'latitude': 45.82387776383388,
        'longitude': 21.258653189789598
      }
    }, {
      'location': {
        'latitude': 45.781905006981994,
        'longitude': 21.164018797422912
      }
    }, {
      'location': {
        'latitude': 45.690678681085735,
        'longitude': 21.316354742236634
      }
    }, {
      'location': {
        'latitude': 45.820980098102446,
        'longitude': 21.276414774705398
      }
    }, {
      'location': {
        'latitude': 45.68710297139796,
        'longitude': 21.320411317752246
      }
    }, {
      'location': {
        'latitude': 45.8016655828383,
        'longitude': 21.215352125059844
      }
    }, {
      'location': {
        'latitude': 45.720265546645464,
        'longitude': 21.185590286328907
      }
    }, {
      'location': {
        'latitude': 45.8333489919352,
        'longitude': 21.160066482243185
      }
    }, {
      'location': {
        'latitude': 45.77838906007506,
        'longitude': 21.174063942114838
      }
    }, {
      'location': {
        'latitude': 45.755262017591896,
        'longitude': 21.207095567966885
      }
    }, {
      'location': {
        'latitude': 45.76332495875213,
        'longitude': 21.126954356983195
      }
    }, {
      'location': {
        'latitude': 45.7400624980298,
        'longitude': 21.285138482471393
      }
    }, {
      'location': {
        'latitude': 45.7360084860878,
        'longitude': 21.3094030695419
      }
    }, {
      'location': {
        'latitude': 45.787143810397374,
        'longitude': 21.16875635669655
      }
    }, {
      'location': {
        'latitude': 45.8326187043113,
        'longitude': 21.199999140067707
      }
    }, {
      'location': {
        'latitude': 45.7750003701744,
        'longitude': 21.22406262436718
      }
    }, {
      'location': {
        'latitude': 45.829059580628595,
        'longitude': 21.173845380117964
      }
    }, {
      'location': {
        'latitude': 45.76695342040536,
        'longitude': 21.124662815628938
      }
    }, {
      'location': {
        'latitude': 45.769641575094234,
        'longitude': 21.139935048543784
      }
    }, {
      'location': {
        'latitude': 45.828759965979536,
        'longitude': 21.307552260242147
      }
    }, {
      'location': {
        'latitude': 45.743099141565764,
        'longitude': 21.296915418667197
      }
    }, {
      'location': {
        'latitude': 45.71553139546272,
        'longitude': 21.23246717651834
      }
    }, {
      'location': {
        'latitude': 45.80169034683354,
        'longitude': 21.30526833378707
      }
    }, {
      'location': {
        'latitude': 45.80655497509547,
        'longitude': 21.116454917294345
      }
    }, {
      'location': {
        'latitude': 45.687450247966176,
        'longitude': 21.241298153717985
      }
    }, {
      'location': {
        'latitude': 45.71750432720908,
        'longitude': 21.12256041444211
      }
    }, {
      'location': {
        'latitude': 45.77698406454165,
        'longitude': 21.3017421705098
      }
    }, {
      'location': {
        'latitude': 45.72647394706571,
        'longitude': 21.167599999173817
      }
    }, {
      'location': {
        'latitude': 45.7849941464751,
        'longitude': 21.3151445859551
      }
    }, {
      'location': {
        'latitude': 45.83250923256175,
        'longitude': 21.320185507379264
      }
    }, {
      'location': {
        'latitude': 45.69890001166342,
        'longitude': 21.325883465921947
      }
    }, {
      'location': {
        'latitude': 45.74689843802925,
        'longitude': 21.134069530318946
      }
    }, {
      'location': {
        'latitude': 45.77845509767369,
        'longitude': 21.13271565617878
      }
    }, {
      'location': {
        'latitude': 45.829151020170926,
        'longitude': 21.18360817212776
      }
    }, {
      'location': {
        'latitude': 45.68561601299894,
        'longitude': 21.314938262593927
      }
    }, {
      'location': {
        'latitude': 45.71144738401552,
        'longitude': 21.20357128887285
      }
    }, {
      'location': {
        'latitude': 45.83025347845052,
        'longitude': 21.15599885957496
      }
    }, {
      'location': {
        'latitude': 45.709433029410796,
        'longitude': 21.29892537422502
      }
    }, {
      'location': {
        'latitude': 45.75366962746872,
        'longitude': 21.297361967736027
      }
    }, {
      'location': {
        'latitude': 45.82799752890635,
        'longitude': 21.127027916928743
      }
    }, {
      'location': {
        'latitude': 45.80444378156359,
        'longitude': 21.121807953755802
      }
    }, {
      'location': {
        'latitude': 45.82166247252434,
        'longitude': 21.15527704634062
      }
    }, {
      'location': {
        'latitude': 45.723226514631286,
        'longitude': 21.32039661807641
      }
    }, {
      'location': {
        'latitude': 45.717475254891134,
        'longitude': 21.115324333412463
      }
    }, {
      'location': {
        'latitude': 45.772020842146986,
        'longitude': 21.20551047335717
      }
    }, {
      'location': {
        'latitude': 45.74487906257063,
        'longitude': 21.15886255394793
      }
    }, {
      'location': {
        'latitude': 45.766525037499285,
        'longitude': 21.1513126098863
      }
    }, {
      'location': {
        'latitude': 45.698689152919584,
        'longitude': 21.16619832681215
      }
    }, {
      'location': {
        'latitude': 45.73327050640881,
        'longitude': 21.229982997806857
      }
    }, {
      'location': {
        'latitude': 45.70247395545662,
        'longitude': 21.32503875345645
      }
    }, {
      'location': {
        'latitude': 45.703225920315894,
        'longitude': 21.224488187248383
      }
    }, {
      'location': {
        'latitude': 45.78050749799742,
        'longitude': 21.201515624085026
      }
    }, {
      'location': {
        'latitude': 45.69330616291793,
        'longitude': 21.317805863537714
      }
    }, {
      'location': {
        'latitude': 45.818335150348254,
        'longitude': 21.157474709936462
      }
    }, {
      'location': {
        'latitude': 45.74917015945314,
        'longitude': 21.13372256109111
      }
    }, {
      'location': {
        'latitude': 45.72199729826944,
        'longitude': 21.209468113604252
      }
    }, {
      'location': {
        'latitude': 45.735699000329525,
        'longitude': 21.11628177215415
      }
    }, {
      'location': {
        'latitude': 45.74351563720563,
        'longitude': 21.31985433325814
      }
    }, {
      'location': {
        'latitude': 45.70071413596879,
        'longitude': 21.326110084756166
      }
    }, {
      'location': {
        'latitude': 45.82093795155035,
        'longitude': 21.16507819230356
      }
    }, {
      'location': {
        'latitude': 45.763840500763045,
        'longitude': 21.251214334751733
      }
    }, {
      'location': {
        'latitude': 45.82602804912124,
        'longitude': 21.25447239351928
      }
    }, {
      'location': {
        'latitude': 45.798357542100966,
        'longitude': 21.152509176036443
      }
    }, {
      'location': {
        'latitude': 45.719979111230366,
        'longitude': 21.186964730666254
      }
    }, {
      'location': {
        'latitude': 45.760215587871016,
        'longitude': 21.304133960233273
      }
    }, {
      'location': {
        'latitude': 45.74925119300598,
        'longitude': 21.26363636751206
      }
    }, {
      'location': {
        'latitude': 45.76751555526774,
        'longitude': 21.23553576484638
      }
    }, {
      'location': {
        'latitude': 45.70109235560866,
        'longitude': 21.179625938329682
      }
    }, {
      'location': {
        'latitude': 45.722515742494245,
        'longitude': 21.232353567414446
      }
    }, {
      'location': {
        'latitude': 45.82769526308633,
        'longitude': 21.278481129198077
      }
    }, {
      'location': {
        'latitude': 45.72290709122708,
        'longitude': 21.13216993930695
      }
    }, {
      'location': {
        'latitude': 45.707757886589036,
        'longitude': 21.246638392431358
      }
    }, {
      'location': {
        'latitude': 45.7492029974035,
        'longitude': 21.184480936733024
      }
    }, {
      'location': {
        'latitude': 45.698559636697915,
        'longitude': 21.207587231085355
      }
    }, {
      'location': {
        'latitude': 45.82868835734013,
        'longitude': 21.14815144899867
      }
    }, {
      'location': {
        'latitude': 45.6946598169415,
        'longitude': 21.205383686360054
      }
    }, {
      'location': {
        'latitude': 45.69264252139443,
        'longitude': 21.16639808013252
      }
    }, {
      'location': {
        'latitude': 45.82791841682439,
        'longitude': 21.123137788684424
      }
    }, {
      'location': {
        'latitude': 45.68418070986578,
        'longitude': 21.122587690504286
      }
    }, {
      'location': {
        'latitude': 45.76772922653822,
        'longitude': 21.131819774982166
      }
    }, {
      'location': {
        'latitude': 45.70734909228265,
        'longitude': 21.314554726760978
      }
    }, {
      'location': {
        'latitude': 45.736769848015655,
        'longitude': 21.17473667701113
      }
    }, {
      'location': {
        'latitude': 45.81674949140223,
        'longitude': 21.216892818128844
      }
    }, {
      'location': {
        'latitude': 45.80261333394233,
        'longitude': 21.297341202107752
      }
    }, {
      'location': {
        'latitude': 45.82121010130916,
        'longitude': 21.12288231213299
      }
    }, {
      'location': {
        'latitude': 45.776798607775014,
        'longitude': 21.114861091135463
      }
    }, {
      'location': {
        'latitude': 45.750937530790814,
        'longitude': 21.149983298549664
      }
    }, {
      'location': {
        'latitude': 45.8037592976323,
        'longitude': 21.23282474755425
      }
    }, {
      'location': {
        'latitude': 45.73106256677704,
        'longitude': 21.323078218809638
      }
    }, {
      'location': {
        'latitude': 45.7437575999062,
        'longitude': 21.272541623892156
      }
    }, {
      'location': {
        'latitude': 45.77460422464202,
        'longitude': 21.124255646779957
      }
    }, {
      'location': {
        'latitude': 45.824045940585286,
        'longitude': 21.17215261058014
      }
    }, {
      'location': {
        'latitude': 45.819045778005695,
        'longitude': 21.142475491630847
      }
    }, {
      'location': {
        'latitude': 45.81048028525686,
        'longitude': 21.22702068822958
      }
    }, {
      'location': {
        'latitude': 45.739620603397555,
        'longitude': 21.21594051106925
      }
    }, {
      'location': {
        'latitude': 45.69686642565421,
        'longitude': 21.181060883007007
      }
    }, {
      'location': {
        'latitude': 45.72513498731197,
        'longitude': 21.198379441311243
      }
    }, {
      'location': {
        'latitude': 45.7898850087068,
        'longitude': 21.265320203408024
      }
    }, {
      'location': {
        'latitude': 45.75278436251084,
        'longitude': 21.119470120573236
      }
    }, {
      'location': {
        'latitude': 45.81881571211841,
        'longitude': 21.236066788216426
      }
    }, {
      'location': {
        'latitude': 45.79492340593071,
        'longitude': 21.18119898659936
      }
    }, {
      'location': {
        'latitude': 45.77214380599335,
        'longitude': 21.133381592737354
      }
    }, {
      'location': {
        'latitude': 45.743465846144716,
        'longitude': 21.23623558630398
      }
    }, {
      'location': {
        'latitude': 45.689068675898696,
        'longitude': 21.183584439230035
      }
    }, {
      'location': {
        'latitude': 45.764900769516444,
        'longitude': 21.194805873306816
      }
    }, {
      'location': {
        'latitude': 45.825745226790666,
        'longitude': 21.2288003018981
      }
    }, {
      'location': {
        'latitude': 45.742255906035666,
        'longitude': 21.21433557443223
      }
    }, {
      'location': {
        'latitude': 45.694657510052444,
        'longitude': 21.188063767279864
      }
    }, {
      'location': {
        'latitude': 45.72192613356527,
        'longitude': 21.16017921475517
      }
    }, {
      'location': {
        'latitude': 45.713740812307236,
        'longitude': 21.151732704693543
      }
    }, {
      'location': {
        'latitude': 45.78413947941825,
        'longitude': 21.16343840435579
      }
    }, {
      'location': {
        'latitude': 45.710362105797394,
        'longitude': 21.255356740097202
      }
    }, {
      'location': {
        'latitude': 45.826174355392276,
        'longitude': 21.27195626795142
      }
    }, {
      'location': {
        'latitude': 45.77488689534381,
        'longitude': 21.251191646249545
      }
    }, {
      'location': {
        'latitude': 45.68616589296755,
        'longitude': 21.14141774248802
      }
    }, {
      'location': {
        'latitude': 45.78029938990751,
        'longitude': 21.256796945045238
      }
    }, {
      'location': {
        'latitude': 45.80828479804267,
        'longitude': 21.311067479387358
      }
    }, {
      'location': {
        'latitude': 45.81667098846634,
        'longitude': 21.292160169163502
      }
    }, {
      'location': {
        'latitude': 45.72226951807003,
        'longitude': 21.30153648334575
      }
    }, {
      'location': {
        'latitude': 45.769770637854094,
        'longitude': 21.19909648033904
      }
    }, {
      'location': {
        'latitude': 45.81262377127276,
        'longitude': 21.325205243525897
      }
    }, {
      'location': {
        'latitude': 45.719801241847456,
        'longitude': 21.239262094997613
      }
    }, {
      'location': {
        'latitude': 45.813043089651934,
        'longitude': 21.170647189292506
      }
    }, {
      'location': {
        'latitude': 45.71032886340302,
        'longitude': 21.11601293659263
      }
    }, {
      'location': {
        'latitude': 45.78212694126783,
        'longitude': 21.12466145730513
      }
    }, {
      'location': {
        'latitude': 45.76042970684241,
        'longitude': 21.183237129435707
      }
    }, {
      'location': {
        'latitude': 45.83079855807444,
        'longitude': 21.121501704591815
      }
    }, {
      'location': {
        'latitude': 45.78451607314678,
        'longitude': 21.187268412105556
      }
    }, {
      'location': {
        'latitude': 45.74948295011327,
        'longitude': 21.317859276171877
      }
    }, {
      'location': {
        'latitude': 45.69621849615866,
        'longitude': 21.213511904396892
      }
    }, {
      'location': {
        'latitude': 45.69697585259002,
        'longitude': 21.225945313191485
      }
    }, {
      'location': {
        'latitude': 45.75067574006293,
        'longitude': 21.22232219290697
      }
    }, {
      'location': {
        'latitude': 45.77176873669108,
        'longitude': 21.182707198734164
      }
    }, {
      'location': {
        'latitude': 45.76211086644887,
        'longitude': 21.206618918219995
      }
    }, {
      'location': {
        'latitude': 45.72887449225579,
        'longitude': 21.247559875616826
      }
    }, {
      'location': {
        'latitude': 45.704628202937194,
        'longitude': 21.22117542355967
      }
    }, {
      'location': {
        'latitude': 45.8048133128889,
        'longitude': 21.22028234745271
      }
    }, {
      'location': {
        'latitude': 45.825101241636716,
        'longitude': 21.118970376679428
      }
    }, {
      'location': {
        'latitude': 45.83316946350458,
        'longitude': 21.19160777900012
      }
    }, {
      'location': {
        'latitude': 45.71043799183609,
        'longitude': 21.267468518885863
      }
    }, {
      'location': {
        'latitude': 45.69762300629106,
        'longitude': 21.267064911075252
      }
    }, {
      'location': {
        'latitude': 45.74021513830821,
        'longitude': 21.326894874262667
      }
    }, {
      'location': {
        'latitude': 45.81570145123741,
        'longitude': 21.298105716848863
      }
    }, {
      'location': {
        'latitude': 45.76704220222983,
        'longitude': 21.22706269953281
      }
    }, {
      'location': {
        'latitude': 45.82897152200228,
        'longitude': 21.318888212275187
      }
    }, {
      'location': {
        'latitude': 45.71587442187648,
        'longitude': 21.155276945170186
      }
    }, {
      'location': {
        'latitude': 45.739316401793424,
        'longitude': 21.320764732814755
      }
    }, {
      'location': {
        'latitude': 45.75333980176102,
        'longitude': 21.16526117692047
      }
    }, {
      'location': {
        'latitude': 45.74806702208178,
        'longitude': 21.32179704545224
      }
    }, {
      'location': {
        'latitude': 45.79537179414903,
        'longitude': 21.164360920219146
      }
    }, {
      'location': {
        'latitude': 45.70468659100734,
        'longitude': 21.288605830080293
      }
    }, {
      'location': {
        'latitude': 45.75290904980972,
        'longitude': 21.271011035899374
      }
    }, {
      'location': {
        'latitude': 45.696955655092,
        'longitude': 21.265215515947304
      }
    }, {
      'location': {
        'latitude': 45.70080974760482,
        'longitude': 21.281202245415376
      }
    }, {
      'location': {
        'latitude': 45.7974480817741,
        'longitude': 21.325354227637774
      }
    }, {
      'location': {
        'latitude': 45.786353732659244,
        'longitude': 21.306125669711843
      }
    }, {
      'location': {
        'latitude': 45.77596740508197,
        'longitude': 21.210514224105737
      }
    }, {
      'location': {
        'latitude': 45.74635283559584,
        'longitude': 21.12141964414782
      }
    }, {
      'location': {
        'latitude': 45.824618631386436,
        'longitude': 21.126193367275473
      }
    }, {
      'location': {
        'latitude': 45.747622629121246,
        'longitude': 21.2275956356288
      }
    }, {
      'location': {
        'latitude': 45.756395560990406,
        'longitude': 21.199321076843198
      }
    }, {
      'location': {
        'latitude': 45.7783536242721,
        'longitude': 21.252159225945324
      }
    }, {
      'location': {
        'latitude': 45.68685756045533,
        'longitude': 21.32552660575328
      }
    }, {
      'location': {
        'latitude': 45.751944641065,
        'longitude': 21.156557185566573
      }
    }, {
      'location': {
        'latitude': 45.8034637963944,
        'longitude': 21.119005294696553
      }
    }, {
      'location': {
        'latitude': 45.82674787495044,
        'longitude': 21.314561942378873
      }
    }, {
      'location': {
        'latitude': 45.83291405666598,
        'longitude': 21.142404131048718
      }
    }, {
      'location': {
        'latitude': 45.686113960448104,
        'longitude': 21.184957422814072
      }
    }, {
      'location': {
        'latitude': 45.71660842745142,
        'longitude': 21.254046139501853
      }
    }, {
      'location': {
        'latitude': 45.82756482929815,
        'longitude': 21.20465905576721
      }
    }, {
      'location': {
        'latitude': 45.797598767228244,
        'longitude': 21.212509222399877
      }
    }, {
      'location': {
        'latitude': 45.8322357375332,
        'longitude': 21.29022235659133
      }
    }, {
      'location': {
        'latitude': 45.70670738429746,
        'longitude': 21.11175165099774
      }
    }, {
      'location': {
        'latitude': 45.73445814128732,
        'longitude': 21.12291960789594
      }
    }, {
      'location': {
        'latitude': 45.68553112158795,
        'longitude': 21.27539724008874
      }
    }, {
      'location': {
        'latitude': 45.83256078033197,
        'longitude': 21.24759294323891
      }
    }, {
      'location': {
        'latitude': 45.7442289321712,
        'longitude': 21.239462528823523
      }
    }, {
      'location': {
        'latitude': 45.814282660970534,
        'longitude': 21.276178445661976
      }
    }, {
      'location': {
        'latitude': 45.802911167729945,
        'longitude': 21.19793990573395
      }
    }, {
      'location': {
        'latitude': 45.821724109758854,
        'longitude': 21.130990047940628
      }
    }, {
      'location': {
        'latitude': 45.713820590522424,
        'longitude': 21.265717158599667
      }
    }, {
      'location': {
        'latitude': 45.80440053762618,
        'longitude': 21.249986458687804
      }
    }, {
      'location': {
        'latitude': 45.77905141560182,
        'longitude': 21.230489962404167
      }
    }, {
      'location': {
        'latitude': 45.78002933003744,
        'longitude': 21.15507921939886
      }
    }, {
      'location': {
        'latitude': 45.824289576809974,
        'longitude': 21.234734618967103
      }
    }, {
      'location': {
        'latitude': 45.741464782643305,
        'longitude': 21.158732826221584
      }
    }, {
      'location': {
        'latitude': 45.69919360969891,
        'longitude': 21.159262736998663
      }
    }, {
      'location': {
        'latitude': 45.794654999100025,
        'longitude': 21.210494686896684
      }
    }, {
      'location': {
        'latitude': 45.828002517055005,
        'longitude': 21.185985718391922
      }
    }, {
      'location': {
        'latitude': 45.77580119171262,
        'longitude': 21.1911795096464
      }
    }, {
      'location': {
        'latitude': 45.78063395032867,
        'longitude': 21.225866344248868
      }
    }, {
      'location': {
        'latitude': 45.8214189743314,
        'longitude': 21.252463343675732
      }
    }, {
      'location': {
        'latitude': 45.806405263077515,
        'longitude': 21.262582007824772
      }
    }, {
      'location': {
        'latitude': 45.76588213807439,
        'longitude': 21.187043695851877
      }
    }, {
      'location': {
        'latitude': 45.775514074406516,
        'longitude': 21.12957893243134
      }
    }, {
      'location': {
        'latitude': 45.785504061366275,
        'longitude': 21.32306289336619
      }
    }, {
      'location': {
        'latitude': 45.832306137835566,
        'longitude': 21.26121721146089
      }
    }, {
      'location': {
        'latitude': 45.75240103305331,
        'longitude': 21.261224381277273
      }
    }, {
      'location': {
        'latitude': 45.75498874377418,
        'longitude': 21.184303446461655
      }
    }, {
      'location': {
        'latitude': 45.713588967049176,
        'longitude': 21.219920353402976
      }
    }, {
      'location': {
        'latitude': 45.6877268135247,
        'longitude': 21.111903788844973
      }
    }, {
      'location': {
        'latitude': 45.786852091269495,
        'longitude': 21.30348222851008
      }
    }, {
      'location': {
        'latitude': 45.790373317319414,
        'longitude': 21.281308926588064
      }
    }, {
      'location': {
        'latitude': 45.80022115839499,
        'longitude': 21.30674422970214
      }
    }, {
      'location': {
        'latitude': 45.82171157419103,
        'longitude': 21.200715038860846
      }
    }, {
      'location': {
        'latitude': 45.697695095724264,
        'longitude': 21.212988648573006
      }
    }, {
      'location': {
        'latitude': 45.756910847279535,
        'longitude': 21.2576577902728
      }
    }, {
      'location': {
        'latitude': 45.7318567947404,
        'longitude': 21.140229871254842
      }
    }, {
      'location': {
        'latitude': 45.70069722374221,
        'longitude': 21.17150978725592
      }
    }, {
      'location': {
        'latitude': 45.806501157536836,
        'longitude': 21.19239472861805
      }
    }, {
      'location': {
        'latitude': 45.70818459674153,
        'longitude': 21.182702592216664
      }
    }, {
      'location': {
        'latitude': 45.74891765375988,
        'longitude': 21.254784151374867
      }
    }, {
      'location': {
        'latitude': 45.81300450832217,
        'longitude': 21.250572843613615
      }
    }, {
      'location': {
        'latitude': 45.69350242500601,
        'longitude': 21.11242146875243
      }
    }, {
      'location': {
        'latitude': 45.75266118253411,
        'longitude': 21.235022725024198
      }
    }, {
      'location': {
        'latitude': 45.71918961984261,
        'longitude': 21.18513248460364
      }
    }, {
      'location': {
        'latitude': 45.772111732360905,
        'longitude': 21.201619324621465
      }
    }, {
      'location': {
        'latitude': 45.78544927337943,
        'longitude': 21.318353372396643
      }
    }, {
      'location': {
        'latitude': 45.73742473202358,
        'longitude': 21.20793766362545
      }
    }, {
      'location': {
        'latitude': 45.75839133443255,
        'longitude': 21.320210072921252
      }
    }, {
      'location': {
        'latitude': 45.7191006373008,
        'longitude': 21.122143881477776
      }
    }, {
      'location': {
        'latitude': 45.82081369821056,
        'longitude': 21.17822548694493
      }
    }, {
      'location': {
        'latitude': 45.79034901169004,
        'longitude': 21.122685195754205
      }
    }, {
      'location': {
        'latitude': 45.71835761760842,
        'longitude': 21.26556322917746
      }
    }, {
      'location': {
        'latitude': 45.70175896949643,
        'longitude': 21.190217966843157
      }
    }, {
      'location': {
        'latitude': 45.78843513736348,
        'longitude': 21.281750940623862
      }
    }, {
      'location': {
        'latitude': 45.80562970023817,
        'longitude': 21.13467965897383
      }
    }, {
      'location': {
        'latitude': 45.80840328258223,
        'longitude': 21.241197909876607
      }
    }, {
      'location': {
        'latitude': 45.79012357179993,
        'longitude': 21.24006811742871
      }
    }, {
      'location': {
        'latitude': 45.780770467928235,
        'longitude': 21.281358365452434
      }
    }, {
      'location': {
        'latitude': 45.753947124158714,
        'longitude': 21.234631855785715
      }
    }, {
      'location': {
        'latitude': 45.76725848533239,
        'longitude': 21.12104319547231
      }
    }, {
      'location': {
        'latitude': 45.736597639254796,
        'longitude': 21.309592865868286
      }
    }, {
      'location': {
        'latitude': 45.82365808622656,
        'longitude': 21.19522410923753
      }
    }, {
      'location': {
        'latitude': 45.816799706234384,
        'longitude': 21.225307869572564
      }
    }, {
      'location': {
        'latitude': 45.710096176734055,
        'longitude': 21.314429355129477
      }
    }, {
      'location': {
        'latitude': 45.769070847544455,
        'longitude': 21.254297941646886
      }
    }, {
      'location': {
        'latitude': 45.714451514132016,
        'longitude': 21.316963333303065
      }
    }, {
      'location': {
        'latitude': 45.71997178087843,
        'longitude': 21.18603177198864
      }
    }, {
      'location': {
        'latitude': 45.71293596655353,
        'longitude': 21.25808824220161
      }
    }, {
      'location': {
        'latitude': 45.71981004267028,
        'longitude': 21.29025658247121
      }
    }, {
      'location': {
        'latitude': 45.792418214785656,
        'longitude': 21.297178842159884
      }
    }, {
      'location': {
        'latitude': 45.771970905443254,
        'longitude': 21.271322228336025
      }
    }, {
      'location': {
        'latitude': 45.75923138176263,
        'longitude': 21.271401613311152
      }
    }, {
      'location': {
        'latitude': 45.77152729410028,
        'longitude': 21.26851865851363
      }
    }, {
      'location': {
        'latitude': 45.711875750058866,
        'longitude': 21.25576617694259
      }
    }, {
      'location': {
        'latitude': 45.73426460744628,
        'longitude': 21.151639562183995
      }
    }, {
      'location': {
        'latitude': 45.69361250716732,
        'longitude': 21.12304434617993
      }
    }, {
      'location': {
        'latitude': 45.737126878847235,
        'longitude': 21.1336652077803
      }
    }, {
      'location': {
        'latitude': 45.78727206128225,
        'longitude': 21.30213871178552
      }
    }, {
      'location': {
        'latitude': 45.78825828581463,
        'longitude': 21.213424476428912
      }
    }, {
      'location': {
        'latitude': 45.74337886156986,
        'longitude': 21.226109658124
      }
    }, {
      'location': {
        'latitude': 45.72137592047162,
        'longitude': 21.140694286305184
      }
    }, {
      'location': {
        'latitude': 45.77427503936147,
        'longitude': 21.25048595835069
      }
    }, {
      'location': {
        'latitude': 45.815406733517705,
        'longitude': 21.17218180713703
      }
    }, {
      'location': {
        'latitude': 45.71829276375762,
        'longitude': 21.13886933395363
      }
    }, {
      'location': {
        'latitude': 45.80786757518781,
        'longitude': 21.262233362162075
      }
    }, {
      'location': {
        'latitude': 45.69129757383971,
        'longitude': 21.12476323550663
      }
    }, {
      'location': {
        'latitude': 45.77702262090443,
        'longitude': 21.21161316733192
      }
    }, {
      'location': {
        'latitude': 45.713957808951356,
        'longitude': 21.30400855435775
      }
    }, {
      'location': {
        'latitude': 45.74010155365478,
        'longitude': 21.192921038318747
      }
    }, {
      'location': {
        'latitude': 45.72221643651767,
        'longitude': 21.27310313062673
      }
    }, {
      'location': {
        'latitude': 45.720290742355495,
        'longitude': 21.30006530777056
      }
    }, {
      'location': {
        'latitude': 45.80115979054742,
        'longitude': 21.317893082915425
      }
    }, {
      'location': {
        'latitude': 45.75007019490401,
        'longitude': 21.11722762716848
      }
    }, {
      'location': {
        'latitude': 45.725665517943256,
        'longitude': 21.15148711421002
      }
    }, {
      'location': {
        'latitude': 45.709509939870024,
        'longitude': 21.274239924525563
      }
    }, {
      'location': {
        'latitude': 45.77535734879377,
        'longitude': 21.16662678403972
      }
    }, {
      'location': {
        'latitude': 45.77013870421672,
        'longitude': 21.123585999112432
      }
    }, {
      'location': {
        'latitude': 45.72779840705353,
        'longitude': 21.136689296323237
      }
    }, {
      'location': {
        'latitude': 45.7537858980976,
        'longitude': 21.27609429610801
      }
    }, {
      'location': {
        'latitude': 45.81321847987016,
        'longitude': 21.298808173222795
      }
    }, {
      'location': {
        'latitude': 45.720874295602776,
        'longitude': 21.21197716395414
      }
    }, {
      'location': {
        'latitude': 45.82325655736071,
        'longitude': 21.227710293537744
      }
    }, {
      'location': {
        'latitude': 45.796384533013224,
        'longitude': 21.220428903969918
      }
    }, {
      'location': {
        'latitude': 45.764391659874725,
        'longitude': 21.265530525846714
      }
    }, {
      'location': {
        'latitude': 45.80912153333346,
        'longitude': 21.147844932106082
      }
    }, {
      'location': {
        'latitude': 45.783915902113165,
        'longitude': 21.24556883699106
      }
    }, {
      'location': {
        'latitude': 45.814835336612475,
        'longitude': 21.29634253124203
      }
    }, {
      'location': {
        'latitude': 45.81529445115743,
        'longitude': 21.116998879366875
      }
    }, {
      'location': {
        'latitude': 45.75382121534318,
        'longitude': 21.148702497935954
      }
    }, {
      'location': {
        'latitude': 45.78663495331808,
        'longitude': 21.14209513053348
      }
    }, {
      'location': {
        'latitude': 45.742951614799615,
        'longitude': 21.32471252266273
      }
    }, {
      'location': {
        'latitude': 45.791140705240906,
        'longitude': 21.201799759940418
      }
    }, {
      'location': {
        'latitude': 45.73569176120444,
        'longitude': 21.229192056392673
      }
    }, {
      'location': {
        'latitude': 45.75647413917403,
        'longitude': 21.29960882109829
      }
    }, {
      'location': {
        'latitude': 45.7272317955431,
        'longitude': 21.131041890014625
      }
    }, {
      'location': {
        'latitude': 45.754323586421144,
        'longitude': 21.11283633602713
      }
    }, {
      'location': {
        'latitude': 45.7548691965704,
        'longitude': 21.14199302120305
      }
    }, {
      'location': {
        'latitude': 45.79946804614477,
        'longitude': 21.26392369390891
      }
    }, {
      'location': {
        'latitude': 45.73981202416949,
        'longitude': 21.178820002384853
      }
    }, {
      'location': {
        'latitude': 45.80377066700799,
        'longitude': 21.284085413133525
      }
    }, {
      'location': {
        'latitude': 45.722984059382036,
        'longitude': 21.126023300127205
      }
    }, {
      'location': {
        'latitude': 45.68465398813504,
        'longitude': 21.20830325834094
      }
    }, {
      'location': {
        'latitude': 45.774559744029766,
        'longitude': 21.149017327198635
      }
    }, {
      'location': {
        'latitude': 45.76001028652092,
        'longitude': 21.315583776470497
      }
    }, {
      'location': {
        'latitude': 45.719331933318124,
        'longitude': 21.221421827915204
      }
    }, {
      'location': {
        'latitude': 45.71918758646022,
        'longitude': 21.259512841634674
      }
    }, {
      'location': {
        'latitude': 45.80908257335613,
        'longitude': 21.22812058682901
      }
    }, {
      'location': {
        'latitude': 45.766907420896445,
        'longitude': 21.19638506999474
      }
    }, {
      'location': {
        'latitude': 45.80565550902449,
        'longitude': 21.155951110444533
      }
    }, {
      'location': {
        'latitude': 45.75064959214304,
        'longitude': 21.181836209585267
      }
    }, {
      'location': {
        'latitude': 45.77900239107973,
        'longitude': 21.300757829211904
      }
    }, {
      'location': {
        'latitude': 45.75655507942325,
        'longitude': 21.25500579719167
      }
    }, {
      'location': {
        'latitude': 45.73239020873084,
        'longitude': 21.23369079180487
      }
    }, {
      'location': {
        'latitude': 45.720624741139204,
        'longitude': 21.112438019495766
      }
    }, {
      'location': {
        'latitude': 45.69076100076797,
        'longitude': 21.282178021154756
      }
    }, {
      'location': {
        'latitude': 45.71028260545091,
        'longitude': 21.27991419453833
      }
    }, {
      'location': {
        'latitude': 45.80973168379131,
        'longitude': 21.161433950181905
      }
    }, {
      'location': {
        'latitude': 45.76253558175734,
        'longitude': 21.226738932153857
      }
    }, {
      'location': {
        'latitude': 45.81769795791497,
        'longitude': 21.28668118605272
      }
    }, {
      'location': {
        'latitude': 45.75012636318859,
        'longitude': 21.21253592881367
      }
    }, {
      'location': {
        'latitude': 45.822618586568154,
        'longitude': 21.219186872254063
      }
    }, {
      'location': {
        'latitude': 45.797284439125825,
        'longitude': 21.113187751674168
      }
    }, {
      'location': {
        'latitude': 45.68776880055066,
        'longitude': 21.150823287837873
      }
    }, {
      'location': {
        'latitude': 45.76269724324559,
        'longitude': 21.277902196585206
      }
    }, {
      'location': {
        'latitude': 45.74362345225032,
        'longitude': 21.184499072622398
      }
    }, {
      'location': {
        'latitude': 45.70886403742612,
        'longitude': 21.19027085976887
      }
    }, {
      'location': {
        'latitude': 45.784179252728684,
        'longitude': 21.11999464823049
      }
    }, {
      'location': {
        'latitude': 45.74229631661126,
        'longitude': 21.259703005632144
      }
    }, {
      'location': {
        'latitude': 45.727263346065456,
        'longitude': 21.32528536128399
      }
    }, {
      'location': {
        'latitude': 45.78063955975621,
        'longitude': 21.216277945176675
      }
    }, {
      'location': {
        'latitude': 45.756849509089044,
        'longitude': 21.31736290656874
      }
    }, {
      'location': {
        'latitude': 45.755317247639745,
        'longitude': 21.182441980948024
      }
    }, {
      'location': {
        'latitude': 45.800138136353894,
        'longitude': 21.22904472876229
      }
    }, {
      'location': {
        'latitude': 45.74337078291597,
        'longitude': 21.230410016001436
      }
    }, {
      'location': {
        'latitude': 45.77853040831246,
        'longitude': 21.265220213357143
      }
    }, {
      'location': {
        'latitude': 45.77111757225462,
        'longitude': 21.135977663215353
      }
    }, {
      'location': {
        'latitude': 45.73941419729597,
        'longitude': 21.122691482937263
      }
    }, {
      'location': {
        'latitude': 45.7221953151682,
        'longitude': 21.313684058299994
      }
    }, {
      'location': {
        'latitude': 45.78497681509499,
        'longitude': 21.149670390090666
      }
    }, {
      'location': {
        'latitude': 45.77572003255266,
        'longitude': 21.130026561582287
      }
    }, {
      'location': {
        'latitude': 45.71162762035196,
        'longitude': 21.222684339102504
      }
    }, {
      'location': {
        'latitude': 45.69485076979133,
        'longitude': 21.15309651261948
      }
    }, {
      'location': {
        'latitude': 45.817876750462354,
        'longitude': 21.287636820250864
      }
    }, {
      'location': {
        'latitude': 45.75303020183034,
        'longitude': 21.299759601656447
      }
    }, {
      'location': {
        'latitude': 45.773521565332615,
        'longitude': 21.207934931418713
      }
    }, {
      'location': {
        'latitude': 45.6943124778713,
        'longitude': 21.269484786470315
      }
    }, {
      'location': {
        'latitude': 45.73443743004967,
        'longitude': 21.129259620039
      }
    }, {
      'location': {
        'latitude': 45.7303331255582,
        'longitude': 21.157369643501816
      }
    }, {
      'location': {
        'latitude': 45.759391866022966,
        'longitude': 21.298500294366477
      }
    }, {
      'location': {
        'latitude': 45.827745838114296,
        'longitude': 21.153953911322446
      }
    }, {
      'location': {
        'latitude': 45.68572400746813,
        'longitude': 21.269559384804992
      }
    }, {
      'location': {
        'latitude': 45.6967231409567,
        'longitude': 21.314681218570716
      }
    }, {
      'location': {
        'latitude': 45.79656439194922,
        'longitude': 21.324614104065663
      }
    }, {
      'location': {
        'latitude': 45.812496971480726,
        'longitude': 21.12947442261926
      }
    }, {
      'location': {
        'latitude': 45.81366908462623,
        'longitude': 21.289975514908303
      }
    }, {
      'location': {
        'latitude': 45.73369669794348,
        'longitude': 21.23816826503672
      }
    }, {
      'location': {
        'latitude': 45.800627429976686,
        'longitude': 21.283402894105386
      }
    }, {
      'location': {
        'latitude': 45.82393368180285,
        'longitude': 21.23562510362195
      }
    }, {
      'location': {
        'latitude': 45.781559490803204,
        'longitude': 21.293984932235997
      }
    }, {
      'location': {
        'latitude': 45.758465457585324,
        'longitude': 21.2870277945618
      }
    }, {
      'location': {
        'latitude': 45.77981702693256,
        'longitude': 21.149669710536063
      }
    }, {
      'location': {
        'latitude': 45.7073048559306,
        'longitude': 21.179644878454127
      }
    }, {
      'location': {
        'latitude': 45.80807330368951,
        'longitude': 21.22453581761005
      }
    }, {
      'location': {
        'latitude': 45.75243986828305,
        'longitude': 21.198302939341374
      }
    }, {
      'location': {
        'latitude': 45.71330124742617,
        'longitude': 21.314695802114908
      }
    }, {
      'location': {
        'latitude': 45.740902164951436,
        'longitude': 21.146008421978838
      }
    }, {
      'location': {
        'latitude': 45.7371661717723,
        'longitude': 21.224885530931555
      }
    }, {
      'location': {
        'latitude': 45.702093560685135,
        'longitude': 21.21617477546122
      }
    }, {
      'location': {
        'latitude': 45.69638362319209,
        'longitude': 21.143485236395723
      }
    }, {
      'location': {
        'latitude': 45.77805960834694,
        'longitude': 21.31143934225461
      }
    }, {
      'location': {
        'latitude': 45.76619314496762,
        'longitude': 21.31975837727926
      }
    }, {
      'location': {
        'latitude': 45.725886814883495,
        'longitude': 21.213724244594594
      }
    }, {
      'location': {
        'latitude': 45.8215590820617,
        'longitude': 21.125083384450953
      }
    }, {
      'location': {
        'latitude': 45.78136051605596,
        'longitude': 21.274155868388583
      }
    }, {
      'location': {
        'latitude': 45.79773838225936,
        'longitude': 21.128719489141975
      }
    }, {
      'location': {
        'latitude': 45.70666145696054,
        'longitude': 21.133460455574422
      }
    }, {
      'location': {
        'latitude': 45.75747752813464,
        'longitude': 21.11971214968876
      }
    }, {
      'location': {
        'latitude': 45.70182334193081,
        'longitude': 21.148319507257423
      }
    }, {
      'location': {
        'latitude': 45.784871865126654,
        'longitude': 21.257264369426913
      }
    }, {
      'location': {
        'latitude': 45.8082637826925,
        'longitude': 21.246831380132548
      }
    }, {
      'location': {
        'latitude': 45.69199183638878,
        'longitude': 21.28836349680345
      }
    }, {
      'location': {
        'latitude': 45.80669379739352,
        'longitude': 21.235364465985544
      }
    }, {
      'location': {
        'latitude': 45.8092269749369,
        'longitude': 21.230505279992123
      }
    }, {
      'location': {
        'latitude': 45.82499889364041,
        'longitude': 21.289298104855753
      }
    }, {
      'location': {
        'latitude': 45.694682896234,
        'longitude': 21.206469308249744
      }
    }, {
      'location': {
        'latitude': 45.7355276529687,
        'longitude': 21.19663337604339
      }
    }, {
      'location': {
        'latitude': 45.72550267990099,
        'longitude': 21.234489151319888
      }
    }, {
      'location': {
        'latitude': 45.76733078998039,
        'longitude': 21.18256913347787
      }
    }, {
      'location': {
        'latitude': 45.804851940348755,
        'longitude': 21.193248410625763
      }
    }, {
      'location': {
        'latitude': 45.68456523206663,
        'longitude': 21.248884745501226
      }
    }, {
      'location': {
        'latitude': 45.70722935455109,
        'longitude': 21.30894394797929
      }
    }, {
      'location': {
        'latitude': 45.75016690777002,
        'longitude': 21.267633528636832
      }
    }, {
      'location': {
        'latitude': 45.79459896076335,
        'longitude': 21.29784132555464
      }
    }, {
      'location': {
        'latitude': 45.77864720128904,
        'longitude': 21.241187389095977
      }
    }, {
      'location': {
        'latitude': 45.68525089352791,
        'longitude': 21.13889673594493
      }
    }, {
      'location': {
        'latitude': 45.78481856749538,
        'longitude': 21.192720478580284
      }
    }, {
      'location': {
        'latitude': 45.80696772669325,
        'longitude': 21.287909842733466
      }
    }, {
      'location': {
        'latitude': 45.78042982739806,
        'longitude': 21.161520231946024
      }
    }, {
      'location': {
        'latitude': 45.717485948029896,
        'longitude': 21.199360939382945
      }
    }, {
      'location': {
        'latitude': 45.8112725694077,
        'longitude': 21.152909370312894
      }
    }, {
      'location': {
        'latitude': 45.82657228856435,
        'longitude': 21.213671586892062
      }
    }, {
      'location': {
        'latitude': 45.688416876453076,
        'longitude': 21.22958910853818
      }
    }, {
      'location': {
        'latitude': 45.754374194347555,
        'longitude': 21.17539642835251
      }
    }, {
      'location': {
        'latitude': 45.71708771343699,
        'longitude': 21.308551587835208
      }
    }, {
      'location': {
        'latitude': 45.79764255354625,
        'longitude': 21.14533862747344
      }
    }, {
      'location': {
        'latitude': 45.748375604550674,
        'longitude': 21.175995822523102
      }
    }, {
      'location': {
        'latitude': 45.816726028840705,
        'longitude': 21.115516058048186
      }
    }, {
      'location': {
        'latitude': 45.79084587894976,
        'longitude': 21.32244944349957
      }
    }, {
      'location': {
        'latitude': 45.73455688113682,
        'longitude': 21.206566085368273
      }
    }, {
      'location': {
        'latitude': 45.71884163977655,
        'longitude': 21.212664897285386
      }
    }, {
      'location': {
        'latitude': 45.75039170720533,
        'longitude': 21.13936371132422
      }
    }, {
      'location': {
        'latitude': 45.698257317036706,
        'longitude': 21.243603866528165
      }
    }, {
      'location': {
        'latitude': 45.77035326908454,
        'longitude': 21.290528709830458
      }
    }, {
      'location': {
        'latitude': 45.690493274808375,
        'longitude': 21.270488841521946
      }
    }, {
      'location': {
        'latitude': 45.77145579926405,
        'longitude': 21.291173459907924
      }
    }, {
      'location': {
        'latitude': 45.80366317790566,
        'longitude': 21.289596795499904
      }
    }, {
      'location': {
        'latitude': 45.69910199722419,
        'longitude': 21.2341454947239
      }
    }, {
      'location': {
        'latitude': 45.688000077106786,
        'longitude': 21.117137178468948
      }
    }, {
      'location': {
        'latitude': 45.698466765106346,
        'longitude': 21.17390368723871
      }
    }, {
      'location': {
        'latitude': 45.75097446581032,
        'longitude': 21.162674582228448
      }
    }, {
      'location': {
        'latitude': 45.75551093526795,
        'longitude': 21.2003025716376
      }
    }, {
      'location': {
        'latitude': 45.70203377212806,
        'longitude': 21.238933605575646
      }
    }, {
      'location': {
        'latitude': 45.81821483687961,
        'longitude': 21.253249824515624
      }
    }, {
      'location': {
        'latitude': 45.81135523851887,
        'longitude': 21.19029404167392
      }
    }, {
      'location': {
        'latitude': 45.689280374348925,
        'longitude': 21.27532126351346
      }
    }, {
      'location': {
        'latitude': 45.78365202516197,
        'longitude': 21.18284054502812
      }
    }, {
      'location': {
        'latitude': 45.70901379945968,
        'longitude': 21.29651167614954
      }
    }, {
      'location': {
        'latitude': 45.79230548229782,
        'longitude': 21.256133154796522
      }
    }, {
      'location': {
        'latitude': 45.80089039184983,
        'longitude': 21.16905359701372
      }
    }, {
      'location': {
        'latitude': 45.719803734407854,
        'longitude': 21.136768659842556
      }
    }, {
      'location': {
        'latitude': 45.80771236918119,
        'longitude': 21.202125880827218
      }
    }, {
      'location': {
        'latitude': 45.70170313557516,
        'longitude': 21.12895417657803
      }
    }, {
      'location': {
        'latitude': 45.72203972275719,
        'longitude': 21.195711814763406
      }
    }, {
      'location': {
        'latitude': 45.82422288591921,
        'longitude': 21.299237662536203
      }
    }, {
      'location': {
        'latitude': 45.720289139731655,
        'longitude': 21.16696171555006
      }
    }, {
      'location': {
        'latitude': 45.81652229902479,
        'longitude': 21.175797258986226
      }
    }, {
      'location': {
        'latitude': 45.6908113300682,
        'longitude': 21.296244110049706
      }
    }, {
      'location': {
        'latitude': 45.83107956484005,
        'longitude': 21.186556441755595
      }
    }, {
      'location': {
        'latitude': 45.78503739895533,
        'longitude': 21.120974514526704
      }
    }, {
      'location': {
        'latitude': 45.7849339275453,
        'longitude': 21.191530700902373
      }
    }, {
      'location': {
        'latitude': 45.728187603283835,
        'longitude': 21.29025376504246
      }
    }, {
      'location': {
        'latitude': 45.69116683147247,
        'longitude': 21.14830983703766
      }
    }, {
      'location': {
        'latitude': 45.694144344734504,
        'longitude': 21.138369283470503
      }
    }, {
      'location': {
        'latitude': 45.73006756424056,
        'longitude': 21.305658925092796
      }
    }, {
      'location': {
        'latitude': 45.76773392891178,
        'longitude': 21.27810517821606
      }
    }, {
      'location': {
        'latitude': 45.726956009679846,
        'longitude': 21.216857912079796
      }
    }, {
      'location': {
        'latitude': 45.75835407991759,
        'longitude': 21.247013206083878
      }
    }, {
      'location': {
        'latitude': 45.7284141225272,
        'longitude': 21.26959050732667
      }
    }, {
      'location': {
        'latitude': 45.83018349914896,
        'longitude': 21.126540649444834
      }
    }, {
      'location': {
        'latitude': 45.77830182862148,
        'longitude': 21.285364652451776
      }
    }, {
      'location': {
        'latitude': 45.73998276059567,
        'longitude': 21.174482828007818
      }
    }, {
      'location': {
        'latitude': 45.82114057799536,
        'longitude': 21.222731335548694
      }
    }, {
      'location': {
        'latitude': 45.809518658256756,
        'longitude': 21.125366557490153
      }
    }, {
      'location': {
        'latitude': 45.813721757982364,
        'longitude': 21.210038475130506
      }
    }, {
      'location': {
        'latitude': 45.773142803059216,
        'longitude': 21.16774109801338
      }
    }, {
      'location': {
        'latitude': 45.722003404244255,
        'longitude': 21.139496428307393
      }
    }, {
      'location': {
        'latitude': 45.823116653811454,
        'longitude': 21.21472573085473
      }
    }, {
      'location': {
        'latitude': 45.72295512459994,
        'longitude': 21.222188022933608
      }
    }, {
      'location': {
        'latitude': 45.772321545351346,
        'longitude': 21.307447875610887
      }
    }, {
      'location': {
        'latitude': 45.74707056588168,
        'longitude': 21.25840072530425
      }
    }, {
      'location': {
        'latitude': 45.82933965760934,
        'longitude': 21.3118924570264
      }
    }, {
      'location': {
        'latitude': 45.78098617973626,
        'longitude': 21.133586867706757
      }
    }, {
      'location': {
        'latitude': 45.736958958384555,
        'longitude': 21.222321229327015
      }
    }, {
      'location': {
        'latitude': 45.78231153862152,
        'longitude': 21.202612265064563
      }
    }, {
      'location': {
        'latitude': 45.73410683544945,
        'longitude': 21.298163106863274
      }
    }, {
      'location': {
        'latitude': 45.717225495509254,
        'longitude': 21.222422729189983
      }
    }, {
      'location': {
        'latitude': 45.74263751253764,
        'longitude': 21.19921642741251
      }
    }, {
      'location': {
        'latitude': 45.82696979498014,
        'longitude': 21.30564231620315
      }
    }, {
      'location': {
        'latitude': 45.810897558904585,
        'longitude': 21.138680115806284
      }
    }, {
      'location': {
        'latitude': 45.73355915052255,
        'longitude': 21.31702964918466
      }
    }, {
      'location': {
        'latitude': 45.71595238893088,
        'longitude': 21.314385750651613
      }
    }, {
      'location': {
        'latitude': 45.787289682715695,
        'longitude': 21.204477625287296
      }
    }, {
      'location': {
        'latitude': 45.801553995952226,
        'longitude': 21.169937643742376
      }
    }, {
      'location': {
        'latitude': 45.70775939792149,
        'longitude': 21.282955374177586
      }
    }, {
      'location': {
        'latitude': 45.69976845031121,
        'longitude': 21.198462325250972
      }
    }, {
      'location': {
        'latitude': 45.79925490179892,
        'longitude': 21.22167561351473
      }
    }, {
      'location': {
        'latitude': 45.75984825942264,
        'longitude': 21.235702778713208
      }
    }, {
      'location': {
        'latitude': 45.77451688851791,
        'longitude': 21.132943307072416
      }
    }, {
      'location': {
        'latitude': 45.697447344024916,
        'longitude': 21.14420258646943
      }
    }, {
      'location': {
        'latitude': 45.77161352653729,
        'longitude': 21.30133077101812
      }
    }, {
      'location': {
        'latitude': 45.81301743147965,
        'longitude': 21.120572639531147
      }
    }, {
      'location': {
        'latitude': 45.77146717791221,
        'longitude': 21.30211997575444
      }
    }, {
      'location': {
        'latitude': 45.76707548990663,
        'longitude': 21.297201799131745
      }
    }, {
      'location': {
        'latitude': 45.79093136047857,
        'longitude': 21.271012642952527
      }
    }, {
      'location': {
        'latitude': 45.77530240362995,
        'longitude': 21.184669412565192
      }
    }, {
      'location': {
        'latitude': 45.77987179922757,
        'longitude': 21.308709587124238
      }
    }, {
      'location': {
        'latitude': 45.71905941061472,
        'longitude': 21.21325806639555
      }
    }, {
      'location': {
        'latitude': 45.80284723317441,
        'longitude': 21.17689526980283
      }
    }, {
      'location': {
        'latitude': 45.78253029378723,
        'longitude': 21.27034451355137
      }
    }, {
      'location': {
        'latitude': 45.77772229748153,
        'longitude': 21.12274075373672
      }
    }, {
      'location': {
        'latitude': 45.72552908831585,
        'longitude': 21.220986130921535
      }
    }, {
      'location': {
        'latitude': 45.775388956432295,
        'longitude': 21.2864895286124
      }
    }, {
      'location': {
        'latitude': 45.77895807505167,
        'longitude': 21.263715145710503
      }
    }, {
      'location': {
        'latitude': 45.78378851545242,
        'longitude': 21.20390447635716
      }
    }, {
      'location': {
        'latitude': 45.74631387520298,
        'longitude': 21.277168811080795
      }
    }, {
      'location': {
        'latitude': 45.695244020485994,
        'longitude': 21.2950393642963
      }
    }, {
      'location': {
        'latitude': 45.774532229884684,
        'longitude': 21.129903015037158
      }
    }, {
      'location': {
        'latitude': 45.82388908451967,
        'longitude': 21.24835875804173
      }
    }, {
      'location': {
        'latitude': 45.719781387730116,
        'longitude': 21.165995308964614
      }
    }, {
      'location': {
        'latitude': 45.759907068248744,
        'longitude': 21.126650154606907
      }
    }, {
      'location': {
        'latitude': 45.69448089185279,
        'longitude': 21.138690114078315
      }
    }, {
      'location': {
        'latitude': 45.79447649229949,
        'longitude': 21.224468896053168
      }
    }, {
      'location': {
        'latitude': 45.703863467613424,
        'longitude': 21.25717202985874
      }
    }, {
      'location': {
        'latitude': 45.785922960623374,
        'longitude': 21.18794685824236
      }
    }, {
      'location': {
        'latitude': 45.786464742106226,
        'longitude': 21.17212356413431
      }
    }, {
      'location': {
        'latitude': 45.752093844353574,
        'longitude': 21.26329603162769
      }
    }, {
      'location': {
        'latitude': 45.77034142667238,
        'longitude': 21.125695949381402
      }
    }, {
      'location': {
        'latitude': 45.69872420394854,
        'longitude': 21.184164198020678
      }
    }, {
      'location': {
        'latitude': 45.748803831020446,
        'longitude': 21.23863858859411
      }
    }, {
      'location': {
        'latitude': 45.73818269493263,
        'longitude': 21.23999293681896
      }
    }, {
      'location': {
        'latitude': 45.81943281226995,
        'longitude': 21.289568479885816
      }
    }, {
      'location': {
        'latitude': 45.7825488855029,
        'longitude': 21.130214834513435
      }
    }, {
      'location': {
        'latitude': 45.78749756024858,
        'longitude': 21.212843149774017
      }
    }, {
      'location': {
        'latitude': 45.716748751262315,
        'longitude': 21.30964669073209
      }
    }, {
      'location': {
        'latitude': 45.80500299156176,
        'longitude': 21.215946179457347
      }
    }, {
      'location': {
        'latitude': 45.7314313666994,
        'longitude': 21.285410553624658
      }
    }, {
      'location': {
        'latitude': 45.74961412643318,
        'longitude': 21.31718677345498
      }
    }, {
      'location': {
        'latitude': 45.77229509581312,
        'longitude': 21.31062514575017
      }
    }, {
      'location': {
        'latitude': 45.71085743237923,
        'longitude': 21.18022621663576
      }
    }, {
      'location': {
        'latitude': 45.81245853600688,
        'longitude': 21.26901771357769
      }
    }, {
      'location': {
        'latitude': 45.80156964633117,
        'longitude': 21.14710223656697
      }
    }, {
      'location': {
        'latitude': 45.68583354995999,
        'longitude': 21.24335821444886
      }
    }, {
      'location': {
        'latitude': 45.687583375155654,
        'longitude': 21.217852443733275
      }
    }, {
      'location': {
        'latitude': 45.79090283802967,
        'longitude': 21.311325609234114
      }
    }, {
      'location': {
        'latitude': 45.69690315090587,
        'longitude': 21.11179750790396
      }
    }, {
      'location': {
        'latitude': 45.72109940875971,
        'longitude': 21.243750465467766
      }
    }, {
      'location': {
        'latitude': 45.74187287358777,
        'longitude': 21.271125834804476
      }
    }, {
      'location': {
        'latitude': 45.81409033452016,
        'longitude': 21.29451660725389
      }
    }, {
      'location': {
        'latitude': 45.710611445999795,
        'longitude': 21.170387708422567
      }
    }, {
      'location': {
        'latitude': 45.687216409933995,
        'longitude': 21.127935310376323
      }
    }, {
      'location': {
        'latitude': 45.78169564278836,
        'longitude': 21.26622379265524
      }
    }, {
      'location': {
        'latitude': 45.76930100538235,
        'longitude': 21.24140150492211
      }
    }, {
      'location': {
        'latitude': 45.80165102655979,
        'longitude': 21.159299887731628
      }
    }, {
      'location': {
        'latitude': 45.70205851602447,
        'longitude': 21.14372776181756
      }
    }, {
      'location': {
        'latitude': 45.79673944140484,
        'longitude': 21.146704625976028
      }
    }, {
      'location': {
        'latitude': 45.795414084575484,
        'longitude': 21.148949420900248
      }
    }, {
      'location': {
        'latitude': 45.71099750519261,
        'longitude': 21.222435011164404
      }
    }, {
      'location': {
        'latitude': 45.7879030877989,
        'longitude': 21.192782243867768
      }
    }, {
      'location': {
        'latitude': 45.77382412246142,
        'longitude': 21.266182205307995
      }
    }, {
      'location': {
        'latitude': 45.80585052654714,
        'longitude': 21.299950750424635
      }
    }, {
      'location': {
        'latitude': 45.820992111331485,
        'longitude': 21.177798257423234
      }
    }, {
      'location': {
        'latitude': 45.71580659417417,
        'longitude': 21.22287309025104
      }
    }, {
      'location': {
        'latitude': 45.693310585038056,
        'longitude': 21.117899384706835
      }
    }, {
      'location': {
        'latitude': 45.80968552681914,
        'longitude': 21.171107339712435
      }
    }, {
      'location': {
        'latitude': 45.72890674684574,
        'longitude': 21.230878871099613
      }
    }, {
      'location': {
        'latitude': 45.83208874384374,
        'longitude': 21.165051460983385
      }
    }, {
      'location': {
        'latitude': 45.73636051650104,
        'longitude': 21.17401631888658
      }
    }, {
      'location': {
        'latitude': 45.702081675929826,
        'longitude': 21.30823447798153
      }
    }, {
      'location': {
        'latitude': 45.728277864343575,
        'longitude': 21.157478350890607
      }
    }, {
      'location': {
        'latitude': 45.69258617503807,
        'longitude': 21.160616231973012
      }
    }, {
      'location': {
        'latitude': 45.739480404721085,
        'longitude': 21.27644318014927
      }
    }, {
      'location': {
        'latitude': 45.78712663209763,
        'longitude': 21.31375538710883
      }
    }, {
      'location': {
        'latitude': 45.69077759398644,
        'longitude': 21.320419011387315
      }
    }, {
      'location': {
        'latitude': 45.70815031380132,
        'longitude': 21.295733166248986
      }
    }, {
      'location': {
        'latitude': 45.78738586898616,
        'longitude': 21.214611244731838
      }
    }, {
      'location': {
        'latitude': 45.69926533854642,
        'longitude': 21.242353845690626
      }
    }, {
      'location': {
        'latitude': 45.80670982443191,
        'longitude': 21.220198863326313
      }
    }, {
      'location': {
        'latitude': 45.82647600733697,
        'longitude': 21.186142288208515
      }
    }, {
      'location': {
        'latitude': 45.74358951622233,
        'longitude': 21.325467841305578
      }
    }, {
      'location': {
        'latitude': 45.72430261530321,
        'longitude': 21.254792910764728
      }
    }, {
      'location': {
        'latitude': 45.70297210813344,
        'longitude': 21.14062990241818
      }
    }, {
      'location': {
        'latitude': 45.753179818570906,
        'longitude': 21.258298399801152
      }
    }, {
      'location': {
        'latitude': 45.78515829430957,
        'longitude': 21.20756497497975
      }
    }, {
      'location': {
        'latitude': 45.77336957321822,
        'longitude': 21.171604464481216
      }
    }, {
      'location': {
        'latitude': 45.691973648758164,
        'longitude': 21.154151568461156
      }
    }, {
      'location': {
        'latitude': 45.74129010230464,
        'longitude': 21.135112322946974
      }
    }, {
      'location': {
        'latitude': 45.76858334867159,
        'longitude': 21.123383625312876
      }
    }, {
      'location': {
        'latitude': 45.72123059169148,
        'longitude': 21.196652630673007
      }
    }, {
      'location': {
        'latitude': 45.71661237591521,
        'longitude': 21.12180559568819
      }
    }, {
      'location': {
        'latitude': 45.708812383639376,
        'longitude': 21.292845112719725
      }
    }, {
      'location': {
        'latitude': 45.72642655449932,
        'longitude': 21.16422378957765
      }
    }, {
      'location': {
        'latitude': 45.82214220427771,
        'longitude': 21.2363746656921
      }
    }, {
      'location': {
        'latitude': 45.787743632548946,
        'longitude': 21.23908185530534
      }
    }, {
      'location': {
        'latitude': 45.81807086612243,
        'longitude': 21.221988894330977
      }
    }, {
      'location': {
        'latitude': 45.71880030789056,
        'longitude': 21.314515536263336
      }
    }, {
      'location': {
        'latitude': 45.72555421317613,
        'longitude': 21.32521359327769
      }
    }, {
      'location': {
        'latitude': 45.80283346552957,
        'longitude': 21.324032659022773
      }
    }, {
      'location': {
        'latitude': 45.80791220770405,
        'longitude': 21.11341952425367
      }
    }, {
      'location': {
        'latitude': 45.743188256611695,
        'longitude': 21.182823411334496
      }
    }, {
      'location': {
        'latitude': 45.76717500558815,
        'longitude': 21.302934299200256
      }
    }, {
      'location': {
        'latitude': 45.7609329799143,
        'longitude': 21.238049315513926
      }
    }, {
      'location': {
        'latitude': 45.71845459002106,
        'longitude': 21.173693047055586
      }
    }, {
      'location': {
        'latitude': 45.81355205210662,
        'longitude': 21.288732528411966
      }
    }, {
      'location': {
        'latitude': 45.732664426795246,
        'longitude': 21.19194454845193
      }
    }, {
      'location': {
        'latitude': 45.79032075636965,
        'longitude': 21.152536875106932
      }
    }, {
      'location': {
        'latitude': 45.738253705061496,
        'longitude': 21.22103123940052
      }
    }, {
      'location': {
        'latitude': 45.72187990637905,
        'longitude': 21.26113678845767
      }
    }, {
      'location': {
        'latitude': 45.736618520137064,
        'longitude': 21.244840596984066
      }
    }, {
      'location': {
        'latitude': 45.737237208430344,
        'longitude': 21.295652798436464
      }
    }, {
      'location': {
        'latitude': 45.81585294303184,
        'longitude': 21.177739168539944
      }
    }, {
      'location': {
        'latitude': 45.73258217760855,
        'longitude': 21.16977921803237
      }
    }, {
      'location': {
        'latitude': 45.694851606733316,
        'longitude': 21.25973019202918
      }
    }, {
      'location': {
        'latitude': 45.74563436711286,
        'longitude': 21.281106983131682
      }
    }, {
      'location': {
        'latitude': 45.69301983857134,
        'longitude': 21.298952299706606
      }
    }, {
      'location': {
        'latitude': 45.76825051986139,
        'longitude': 21.1640345461714
      }
    }, {
      'location': {
        'latitude': 45.80838170807912,
        'longitude': 21.28381173002948
      }
    }, {
      'location': {
        'latitude': 45.79083731949125,
        'longitude': 21.176829727649054
      }
    }, {
      'location': {
        'latitude': 45.783573039062745,
        'longitude': 21.118167661081042
      }
    }, {
      'location': {
        'latitude': 45.80063351417344,
        'longitude': 21.1678278239587
      }
    }, {
      'location': {
        'latitude': 45.709720476928524,
        'longitude': 21.199791724185374
      }
    }, {
      'location': {
        'latitude': 45.690336459054386,
        'longitude': 21.24324706907755
      }
    }, {
      'location': {
        'latitude': 45.820675312586374,
        'longitude': 21.17612258950413
      }
    }, {
      'location': {
        'latitude': 45.70177490161758,
        'longitude': 21.312141652324186
      }
    }, {
      'location': {
        'latitude': 45.76380828926868,
        'longitude': 21.273812473884743
      }
    }, {
      'location': {
        'latitude': 45.79238989916484,
        'longitude': 21.177122839037473
      }
    }, {
      'location': {
        'latitude': 45.80279336135541,
        'longitude': 21.242541627542412
      }
    }, {
      'location': {
        'latitude': 45.6975758859913,
        'longitude': 21.324438486842517
      }
    }, {
      'location': {
        'latitude': 45.71419682927527,
        'longitude': 21.270053408695965
      }
    }, {
      'location': {
        'latitude': 45.827270072160346,
        'longitude': 21.30302070731424
      }
    }, {
      'location': {
        'latitude': 45.802571620265525,
        'longitude': 21.307207117735203
      }
    }, {
      'location': {
        'latitude': 45.81605931407388,
        'longitude': 21.226138640642496
      }
    }, {
      'location': {
        'latitude': 45.76468316638226,
        'longitude': 21.169162914826572
      }
    }, {
      'location': {
        'latitude': 45.788526550089024,
        'longitude': 21.190396024737066
      }
    }, {
      'location': {
        'latitude': 45.818364064991385,
        'longitude': 21.17630177592604
      }
    }, {
      'location': {
        'latitude': 45.81620021399224,
        'longitude': 21.13370455850815
      }
    }, {
      'location': {
        'latitude': 45.69109142376845,
        'longitude': 21.175536057117263
      }
    }, {
      'location': {
        'latitude': 45.712146791220256,
        'longitude': 21.264817416999477
      }
    }, {
      'location': {
        'latitude': 45.77650340157854,
        'longitude': 21.143353924316642
      }
    }, {
      'location': {
        'latitude': 45.812356528877615,
        'longitude': 21.28676316410523
      }
    }, {
      'location': {
        'latitude': 45.772412543263684,
        'longitude': 21.277330110720573
      }
    }, {
      'location': {
        'latitude': 45.80660942879628,
        'longitude': 21.238903197460434
      }
    }, {
      'location': {
        'latitude': 45.69875536702772,
        'longitude': 21.200189095147813
      }
    }, {
      'location': {
        'latitude': 45.77784022342557,
        'longitude': 21.235290595832392
      }
    }, {
      'location': {
        'latitude': 45.735389977116476,
        'longitude': 21.261485526059758
      }
    }, {
      'location': {
        'latitude': 45.78133737764928,
        'longitude': 21.13718308167015
      }
    }, {
      'location': {
        'latitude': 45.73090914479287,
        'longitude': 21.13426017110919
      }
    }, {
      'location': {
        'latitude': 45.82376789901543,
        'longitude': 21.214596951420834
      }
    }, {
      'location': {
        'latitude': 45.71453909162935,
        'longitude': 21.256181708223753
      }
    }, {
      'location': {
        'latitude': 45.721218162156575,
        'longitude': 21.243861827052278
      }
    }, {
      'location': {
        'latitude': 45.807848273155884,
        'longitude': 21.24505353888503
      }
    }, {
      'location': {
        'latitude': 45.69069206576081,
        'longitude': 21.129967848686714
      }
    }, {
      'location': {
        'latitude': 45.73066143918621,
        'longitude': 21.182225867923126
      }
    }, {
      'location': {
        'latitude': 45.73145089672227,
        'longitude': 21.19471403884484
      }
    }, {
      'location': {
        'latitude': 45.7781673799618,
        'longitude': 21.21932536539571
      }
    }, {
      'location': {
        'latitude': 45.79796281286601,
        'longitude': 21.1574077820488
      }
    }, {
      'location': {
        'latitude': 45.775958283655065,
        'longitude': 21.23756628151626
      }
    }, {
      'location': {
        'latitude': 45.71940031414578,
        'longitude': 21.11394501009043
      }
    }, {
      'location': {
        'latitude': 45.74685581279655,
        'longitude': 21.27171613130834
      }
    }, {
      'location': {
        'latitude': 45.7666090078474,
        'longitude': 21.133591173501785
      }
    }, {
      'location': {
        'latitude': 45.77852538066128,
        'longitude': 21.23021840012967
      }
    }, {
      'location': {
        'latitude': 45.75244906852871,
        'longitude': 21.295421605722115
      }
    }, {
      'location': {
        'latitude': 45.79933591015251,
        'longitude': 21.179452951120354
      }
    }, {
      'location': {
        'latitude': 45.80558061669119,
        'longitude': 21.194402639798362
      }
    }, {
      'location': {
        'latitude': 45.72867441435737,
        'longitude': 21.250338700365592
      }
    }, {
      'location': {
        'latitude': 45.722178738610985,
        'longitude': 21.197145535574425
      }
    }, {
      'location': {
        'latitude': 45.78879911639631,
        'longitude': 21.32714629289284
      }
    }, {
      'location': {
        'latitude': 45.742776974287345,
        'longitude': 21.160541246682335
      }
    }, {
      'location': {
        'latitude': 45.82417660001431,
        'longitude': 21.31109539395799
      }
    }, {
      'location': {
        'latitude': 45.83136902625411,
        'longitude': 21.140788462437804
      }
    }, {
      'location': {
        'latitude': 45.74976166941856,
        'longitude': 21.31560043830961
      }
    }, {
      'location': {
        'latitude': 45.78047508618963,
        'longitude': 21.279865695113056
      }
    }, {
      'location': {
        'latitude': 45.82856698006331,
        'longitude': 21.181143206092944
      }
    }, {
      'location': {
        'latitude': 45.75047900597986,
        'longitude': 21.139747416871863
      }
    }, {
      'location': {
        'latitude': 45.80750394153442,
        'longitude': 21.27936605610208
      }
    }, {
      'location': {
        'latitude': 45.82863804691088,
        'longitude': 21.21129845266188
      }
    }, {
      'location': {
        'latitude': 45.82380420010679,
        'longitude': 21.14347994302412
      }
    }, {
      'location': {
        'latitude': 45.725214110195935,
        'longitude': 21.320438032498018
      }
    }, {
      'location': {
        'latitude': 45.73302495412426,
        'longitude': 21.232459716191837
      }
    }, {
      'location': {
        'latitude': 45.798402616618,
        'longitude': 21.180341715025218
      }
    }, {
      'location': {
        'latitude': 45.73332141889431,
        'longitude': 21.25851273457678
      }
    }, {
      'location': {
        'latitude': 45.73254989174506,
        'longitude': 21.17057522818509
      }
    }, {
      'location': {
        'latitude': 45.68398449439689,
        'longitude': 21.178069116781757
      }
    }, {
      'location': {
        'latitude': 45.71289379612706,
        'longitude': 21.267390460291242
      }
    }, {
      'location': {
        'latitude': 45.733150051487165,
        'longitude': 21.211258086210314
      }
    }, {
      'location': {
        'latitude': 45.774128659683534,
        'longitude': 21.28673903391585
      }
    }, {
      'location': {
        'latitude': 45.74959389344861,
        'longitude': 21.31885996597068
      }
    }, {
      'location': {
        'latitude': 45.807987589355285,
        'longitude': 21.1259640621316
      }
    }, {
      'location': {
        'latitude': 45.76839963371937,
        'longitude': 21.117110270859033
      }
    }, {
      'location': {
        'latitude': 45.71284954199387,
        'longitude': 21.267245320240182
      }
    }, {
      'location': {
        'latitude': 45.758636310425985,
        'longitude': 21.28626644539131
      }
    }, {
      'location': {
        'latitude': 45.7361760900013,
        'longitude': 21.243906050058605
      }
    }, {
      'location': {
        'latitude': 45.70436318195785,
        'longitude': 21.185444152452877
      }
    }, {
      'location': {
        'latitude': 45.786585088979244,
        'longitude': 21.325276057596618
      }
    }, {
      'location': {
        'latitude': 45.717136688913264,
        'longitude': 21.247972428590646
      }
    }, {
      'location': {
        'latitude': 45.76313823035353,
        'longitude': 21.125029837180882
      }
    }, {
      'location': {
        'latitude': 45.78936749287702,
        'longitude': 21.16177766988092
      }
    }, {
      'location': {
        'latitude': 45.72509035494082,
        'longitude': 21.195635745925983
      }
    }, {
      'location': {
        'latitude': 45.761326539397956,
        'longitude': 21.21472891953309
      }
    }, {
      'location': {
        'latitude': 45.69959107621965,
        'longitude': 21.202042942254923
      }
    }, {
      'location': {
        'latitude': 45.82353488560663,
        'longitude': 21.239704040076006
      }
    }, {
      'location': {
        'latitude': 45.81368879393527,
        'longitude': 21.21350593206793
      }
    }, {
      'location': {
        'latitude': 45.70369803718779,
        'longitude': 21.30090350643208
      }
    }, {
      'location': {
        'latitude': 45.80436560689432,
        'longitude': 21.302055322036914
      }
    }, {
      'location': {
        'latitude': 45.80697714768903,
        'longitude': 21.115080479257784
      }
    }, {
      'location': {
        'latitude': 45.68962967461961,
        'longitude': 21.277809072578933
      }
    }, {
      'location': {
        'latitude': 45.70007444406982,
        'longitude': 21.22564494367576
      }
    }, {
      'location': {
        'latitude': 45.70462938897712,
        'longitude': 21.17961704782506
      }
    }, {
      'location': {
        'latitude': 45.72075616894689,
        'longitude': 21.232818902996012
      }
    }, {
      'location': {
        'latitude': 45.81330450997743,
        'longitude': 21.26998235642434
      }
    }, {
      'location': {
        'latitude': 45.78632504626348,
        'longitude': 21.167593309166836
      }
    }, {
      'location': {
        'latitude': 45.80155875451973,
        'longitude': 21.131806610886528
      }
    }, {
      'location': {
        'latitude': 45.72830355213183,
        'longitude': 21.174417351859713
      }
    }, {
      'location': {
        'latitude': 45.69993643660771,
        'longitude': 21.227685230882823
      }
    }, {
      'location': {
        'latitude': 45.830781295317195,
        'longitude': 21.234942687296684
      }
    }, {
      'location': {
        'latitude': 45.80860535177263,
        'longitude': 21.308406158363955
      }
    }, {
      'location': {
        'latitude': 45.73774347889978,
        'longitude': 21.320836748854482
      }
    }, {
      'location': {
        'latitude': 45.684983485387065,
        'longitude': 21.114960097195702
      }
    }, {
      'location': {
        'latitude': 45.736035813703786,
        'longitude': 21.126368773255436
      }
    }, {
      'location': {
        'latitude': 45.83370406826351,
        'longitude': 21.21873127343828
      }
    }, {
      'location': {
        'latitude': 45.693180822916204,
        'longitude': 21.133754032873114
      }
    }, {
      'location': {
        'latitude': 45.77484616139603,
        'longitude': 21.137073436163043
      }
    }, {
      'location': {
        'latitude': 45.77771740451719,
        'longitude': 21.199915035049695
      }
    }, {
      'location': {
        'latitude': 45.69364971712529,
        'longitude': 21.18957210846924
      }
    }, {
      'location': {
        'latitude': 45.71331296206841,
        'longitude': 21.258834736702667
      }
    }, {
      'location': {
        'latitude': 45.81159136040646,
        'longitude': 21.19446705606472
      }
    }, {
      'location': {
        'latitude': 45.807462691915156,
        'longitude': 21.240190356775155
      }
    }, {
      'location': {
        'latitude': 45.749028871611614,
        'longitude': 21.31005742689988
      }
    }, {
      'location': {
        'latitude': 45.745828236394765,
        'longitude': 21.18770272390117
      }
    }, {
      'location': {
        'latitude': 45.7007223904876,
        'longitude': 21.172112887012347
      }
    }, {
      'location': {
        'latitude': 45.69508013033729,
        'longitude': 21.316967178028552
      }
    }, {
      'location': {
        'latitude': 45.73691365643298,
        'longitude': 21.260213260088552
      }
    }, {
      'location': {
        'latitude': 45.6911314681202,
        'longitude': 21.305207049382755
      }
    }, {
      'location': {
        'latitude': 45.825637972319846,
        'longitude': 21.12493167169862
      }
    }, {
      'location': {
        'latitude': 45.80246266583994,
        'longitude': 21.214969341739774
      }
    }, {
      'location': {
        'latitude': 45.82990859811716,
        'longitude': 21.30402754628012
      }
    }, {
      'location': {
        'latitude': 45.79553309756844,
        'longitude': 21.29639524430985
      }
    }, {
      'location': {
        'latitude': 45.69301582526724,
        'longitude': 21.259580488888883
      }
    }, {
      'location': {
        'latitude': 45.76915082919238,
        'longitude': 21.1819835770763
      }
    }, {
      'location': {
        'latitude': 45.827787927742136,
        'longitude': 21.28624006008663
      }
    }, {
      'location': {
        'latitude': 45.693597432389744,
        'longitude': 21.250316353817265
      }
    }, {
      'location': {
        'latitude': 45.809534440298876,
        'longitude': 21.269413825310878
      }
    }, {
      'location': {
        'latitude': 45.76474725614475,
        'longitude': 21.289279697234473
      }
    }, {
      'location': {
        'latitude': 45.79974504698981,
        'longitude': 21.27894201832904
      }
    }, {
      'location': {
        'latitude': 45.700708411739804,
        'longitude': 21.20698084846339
      }
    }, {
      'location': {
        'latitude': 45.82612414988515,
        'longitude': 21.113237866965218
      }
    }, {
      'location': {
        'latitude': 45.733589552512385,
        'longitude': 21.171082203661324
      }
    }, {
      'location': {
        'latitude': 45.760545442832736,
        'longitude': 21.15962188363554
      }
    }, {
      'location': {
        'latitude': 45.72225600271589,
        'longitude': 21.162832723102984
      }
    }, {
      'location': {
        'latitude': 45.78248023590847,
        'longitude': 21.294484531798847
      }
    }, {
      'location': {
        'latitude': 45.79244640642726,
        'longitude': 21.200449735665696
      }
    }, {
      'location': {
        'latitude': 45.73424743156068,
        'longitude': 21.171084626787582
      }
    }, {
      'location': {
        'latitude': 45.685809104712796,
        'longitude': 21.302588954191783
      }
    }, {
      'location': {
        'latitude': 45.75840069121627,
        'longitude': 21.29841163860506
      }
    }, {
      'location': {
        'latitude': 45.732778664982895,
        'longitude': 21.317779779899766
      }
    }, {
      'location': {
        'latitude': 45.77741145277638,
        'longitude': 21.153755571414877
      }
    }, {
      'location': {
        'latitude': 45.829884906422464,
        'longitude': 21.155149351695865
      }
    }, {
      'location': {
        'latitude': 45.79251878728493,
        'longitude': 21.192453640001077
      }
    }, {
      'location': {
        'latitude': 45.73917516073304,
        'longitude': 21.177274297963496
      }
    }, {
      'location': {
        'latitude': 45.69065458226103,
        'longitude': 21.165745466868373
      }
    }, {
      'location': {
        'latitude': 45.71821509784961,
        'longitude': 21.29247703503278
      }
    }, {
      'location': {
        'latitude': 45.75862758279749,
        'longitude': 21.17666710129875
      }
    }, {
      'location': {
        'latitude': 45.71874359677754,
        'longitude': 21.298959807313054
      }
    }, {
      'location': {
        'latitude': 45.77798300079642,
        'longitude': 21.303811372455076
      }
    }, {
      'location': {
        'latitude': 45.71375044177667,
        'longitude': 21.184967015514864
      }
    }, {
      'location': {
        'latitude': 45.70062441256809,
        'longitude': 21.122006028895164
      }
    }, {
      'location': {
        'latitude': 45.72871746571104,
        'longitude': 21.142872986858325
      }
    }, {
      'location': {
        'latitude': 45.770564566749954,
        'longitude': 21.20339798114342
      }
    }, {
      'location': {
        'latitude': 45.714882741652225,
        'longitude': 21.269250897478052
      }
    }, {
      'location': {
        'latitude': 45.78748497051314,
        'longitude': 21.141389120472112
      }
    }, {
      'location': {
        'latitude': 45.736695687808506,
        'longitude': 21.224253043555663
      }
    }, {
      'location': {
        'latitude': 45.76696686854398,
        'longitude': 21.287300388162343
      }
    }, {
      'location': {
        'latitude': 45.76330272440553,
        'longitude': 21.163243641386313
      }
    }, {
      'location': {
        'latitude': 45.708647007178364,
        'longitude': 21.260700850767943
      }
    }, {
      'location': {
        'latitude': 45.811553748230224,
        'longitude': 21.28413441741282
      }
    }, {
      'location': {
        'latitude': 45.774749421719214,
        'longitude': 21.320995044645944
      }
    }, {
      'location': {
        'latitude': 45.81236025010015,
        'longitude': 21.175042877292057
      }
    }, {
      'location': {
        'latitude': 45.786254718155284,
        'longitude': 21.16283453225217
      }
    }, {
      'location': {
        'latitude': 45.74887296876251,
        'longitude': 21.16033528470021
      }
    }, {
      'location': {
        'latitude': 45.7098525132194,
        'longitude': 21.310015543072403
      }
    }, {
      'location': {
        'latitude': 45.8187000615319,
        'longitude': 21.18251751330586
      }
    }, {
      'location': {
        'latitude': 45.71040409067683,
        'longitude': 21.221971545931797
      }
    }, {
      'location': {
        'latitude': 45.81614783407955,
        'longitude': 21.120718716316723
      }
    }, {
      'location': {
        'latitude': 45.709996047466255,
        'longitude': 21.30594142062555
      }
    }, {
      'location': {
        'latitude': 45.72298210008296,
        'longitude': 21.13019908218529
      }
    }, {
      'location': {
        'latitude': 45.804906407656965,
        'longitude': 21.127540339675488
      }
    }, {
      'location': {
        'latitude': 45.73673311636876,
        'longitude': 21.216339183969364
      }
    }, {
      'location': {
        'latitude': 45.803587795630335,
        'longitude': 21.248146204606183
      }
    }, {
      'location': {
        'latitude': 45.724400427747355,
        'longitude': 21.23687627879786
      }
    }, {
      'location': {
        'latitude': 45.72816876941014,
        'longitude': 21.19630761387354
      }
    }, {
      'location': {
        'latitude': 45.797618950631765,
        'longitude': 21.235204213101024
      }
    }, {
      'location': {
        'latitude': 45.71768728789227,
        'longitude': 21.17934584403749
      }
    }, {
      'location': {
        'latitude': 45.70753215100202,
        'longitude': 21.135876623668878
      }
    }, {
      'location': {
        'latitude': 45.70952002997047,
        'longitude': 21.245262133383655
      }
    }, {
      'location': {
        'latitude': 45.792176481856806,
        'longitude': 21.21194314814031
      }
    }, {
      'location': {
        'latitude': 45.7380128309267,
        'longitude': 21.13878623183496
      }
    }, {
      'location': {
        'latitude': 45.71694082494674,
        'longitude': 21.14846352445904
      }
    }, {
      'location': {
        'latitude': 45.69286784164979,
        'longitude': 21.13408835237156
      }
    }, {
      'location': {
        'latitude': 45.777480502128924,
        'longitude': 21.119995669913937
      }
    }, {
      'location': {
        'latitude': 45.74088785213363,
        'longitude': 21.231368693845948
      }
    }, {
      'location': {
        'latitude': 45.83307743221267,
        'longitude': 21.22294946669671
      }
    }, {
      'location': {
        'latitude': 45.75494302905986,
        'longitude': 21.157060766364737
      }
    }, {
      'location': {
        'latitude': 45.72590284025053,
        'longitude': 21.213375296885225
      }
    }, {
      'location': {
        'latitude': 45.82169895223585,
        'longitude': 21.156570999069476
      }
    }, {
      'location': {
        'latitude': 45.72346029063518,
        'longitude': 21.28898851067615
      }
    }, {
      'location': {
        'latitude': 45.77270811735164,
        'longitude': 21.268677405956613
      }
    }, {
      'location': {
        'latitude': 45.72219022098983,
        'longitude': 21.138600369849307
      }
    }, {
      'location': {
        'latitude': 45.76179519280696,
        'longitude': 21.12248950613998
      }
    }, {
      'location': {
        'latitude': 45.803711017263325,
        'longitude': 21.261675556308912
      }
    }, {
      'location': {
        'latitude': 45.70736157980803,
        'longitude': 21.303724135719733
      }
    }, {
      'location': {
        'latitude': 45.74655756214654,
        'longitude': 21.303249203564334
      }
    }, {
      'location': {
        'latitude': 45.834025080204576,
        'longitude': 21.3216940113658
      }
    }, {
      'location': {
        'latitude': 45.80274509705432,
        'longitude': 21.184738903264925
      }
    }, {
      'location': {
        'latitude': 45.701741594504014,
        'longitude': 21.258868609724047
      }
    }, {
      'location': {
        'latitude': 45.70402900621862,
        'longitude': 21.28457714328658
      }
    }, {
      'location': {
        'latitude': 45.792280691064335,
        'longitude': 21.326295782309984
      }
    }, {
      'location': {
        'latitude': 45.74446858673289,
        'longitude': 21.292128048885353
      }
    }, {
      'location': {
        'latitude': 45.78647907488528,
        'longitude': 21.189857622799117
      }
    }, {
      'location': {
        'latitude': 45.74260627850247,
        'longitude': 21.281879554858243
      }
    }, {
      'location': {
        'latitude': 45.831337716649244,
        'longitude': 21.165666236582897
      }
    }, {
      'location': {
        'latitude': 45.68829863439857,
        'longitude': 21.32603099523594
      }
    }, {
      'location': {
        'latitude': 45.778950538550596,
        'longitude': 21.141138338255182
      }
    }, {
      'location': {
        'latitude': 45.779481720697,
        'longitude': 21.312467558841863
      }
    }, {
      'location': {
        'latitude': 45.70943636288586,
        'longitude': 21.219865057736985
      }
    }, {
      'location': {
        'latitude': 45.68722564445229,
        'longitude': 21.172272493031507
      }
    }, {
      'location': {
        'latitude': 45.832806294956015,
        'longitude': 21.310553467456362
      }
    }, {
      'location': {
        'latitude': 45.68738243062598,
        'longitude': 21.25754551702719
      }
    }, {
      'location': {
        'latitude': 45.71604175180969,
        'longitude': 21.188704417819515
      }
    }, {
      'location': {
        'latitude': 45.7186170990296,
        'longitude': 21.25957353104971
      }
    }, {
      'location': {
        'latitude': 45.82164006648084,
        'longitude': 21.16644027824755
      }
    }, {
      'location': {
        'latitude': 45.75650097669769,
        'longitude': 21.112352980524065
      }
    }, {
      'location': {
        'latitude': 45.686634946469994,
        'longitude': 21.268023749213064
      }
    }, {
      'location': {
        'latitude': 45.71213529010753,
        'longitude': 21.316759007004443
      }
    }, {
      'location': {
        'latitude': 45.76743750250969,
        'longitude': 21.32166336763697
      }
    }, {
      'location': {
        'latitude': 45.82183317792017,
        'longitude': 21.128069432457167
      }
    }, {
      'location': {
        'latitude': 45.7920002423673,
        'longitude': 21.312327158000237
      }
    }, {
      'location': {
        'latitude': 45.74946252073878,
        'longitude': 21.257934156513038
      }
    }, {
      'location': {
        'latitude': 45.69680077795462,
        'longitude': 21.118103504713716
      }
    }, {
      'location': {
        'latitude': 45.77533684591957,
        'longitude': 21.28338884014489
      }
    }, {
      'location': {
        'latitude': 45.7508282883501,
        'longitude': 21.326606722088698
      }
    }, {
      'location': {
        'latitude': 45.79474732094789,
        'longitude': 21.2659130740198
      }
    }, {
      'location': {
        'latitude': 45.79539515617014,
        'longitude': 21.12375180555957
      }
    }, {
      'location': {
        'latitude': 45.803341279093296,
        'longitude': 21.202199566412084
      }
    }, {
      'location': {
        'latitude': 45.70299362131017,
        'longitude': 21.250613324330935
      }
    }, {
      'location': {
        'latitude': 45.753207607078245,
        'longitude': 21.119764970866974
      }
    }, {
      'location': {
        'latitude': 45.74934309566068,
        'longitude': 21.216986809358932
      }
    }, {
      'location': {
        'latitude': 45.81352770820645,
        'longitude': 21.120315077685433
      }
    }, {
      'location': {
        'latitude': 45.758812673951724,
        'longitude': 21.246933169824526
      }
    }, {
      'location': {
        'latitude': 45.697093094379454,
        'longitude': 21.198306499209526
      }
    }, {
      'location': {
        'latitude': 45.82228512819727,
        'longitude': 21.140886919101685
      }
    }, {
      'location': {
        'latitude': 45.808910571021485,
        'longitude': 21.12878571017859
      }
    }, {
      'location': {
        'latitude': 45.7664407463238,
        'longitude': 21.182234459942862
      }
    }, {
      'location': {
        'latitude': 45.76915409447977,
        'longitude': 21.27654630312768
      }
    }, {
      'location': {
        'latitude': 45.79051025401427,
        'longitude': 21.267625531578453
      }
    }, {
      'location': {
        'latitude': 45.80477210920699,
        'longitude': 21.170887781331107
      }
    }, {
      'location': {
        'latitude': 45.828281697447494,
        'longitude': 21.182208989721413
      }
    }, {
      'location': {
        'latitude': 45.81122866924106,
        'longitude': 21.20079696886069
      }
    }, {
      'location': {
        'latitude': 45.77658818288588,
        'longitude': 21.208706486308863
      }
    }, {
      'location': {
        'latitude': 45.702459749009364,
        'longitude': 21.27235390408677
      }
    }, {
      'location': {
        'latitude': 45.685887660042575,
        'longitude': 21.29278994008765
      }
    }, {
      'location': {
        'latitude': 45.79590441145199,
        'longitude': 21.223974797166203
      }
    }, {
      'location': {
        'latitude': 45.71922252291151,
        'longitude': 21.29701256236719
      }
    }, {
      'location': {
        'latitude': 45.81322990346365,
        'longitude': 21.165233535786392
      }
    }, {
      'location': {
        'latitude': 45.74409470494091,
        'longitude': 21.19854272832125
      }
    }, {
      'location': {
        'latitude': 45.76317879827214,
        'longitude': 21.193433650775983
      }
    }, {
      'location': {
        'latitude': 45.688496844069455,
        'longitude': 21.194310242702088
      }
    }, {
      'location': {
        'latitude': 45.74361528867933,
        'longitude': 21.25985332813536
      }
    }, {
      'location': {
        'latitude': 45.83166752159601,
        'longitude': 21.182217522168497
      }
    }, {
      'location': {
        'latitude': 45.688924510984776,
        'longitude': 21.152408063010718
      }
    }, {
      'location': {
        'latitude': 45.70991042893964,
        'longitude': 21.291661683911638
      }
    }, {
      'location': {
        'latitude': 45.765277322206565,
        'longitude': 21.141611374938684
      }
    }, {
      'location': {
        'latitude': 45.8202908764219,
        'longitude': 21.211800159260314
      }
    }, {
      'location': {
        'latitude': 45.83088344377406,
        'longitude': 21.321765629441213
      }
    }, {
      'location': {
        'latitude': 45.69015299093029,
        'longitude': 21.124699680772057
      }
    }, {
      'location': {
        'latitude': 45.76851397676112,
        'longitude': 21.2156219926528
      }
    }, {
      'location': {
        'latitude': 45.7875940339241,
        'longitude': 21.240384244857573
      }
    }, {
      'location': {
        'latitude': 45.75731744677875,
        'longitude': 21.187722052796268
      }
    }, {
      'location': {
        'latitude': 45.800993655864474,
        'longitude': 21.163563785296084
      }
    }, {
      'location': {
        'latitude': 45.76360067188697,
        'longitude': 21.12761305040075
      }
    }, {
      'location': {
        'latitude': 45.80231775890431,
        'longitude': 21.171615005444313
      }
    }, {
      'location': {
        'latitude': 45.77969953511076,
        'longitude': 21.193114346678172
      }
    }, {
      'location': {
        'latitude': 45.72436968758085,
        'longitude': 21.189735538355247
      }
    }, {
      'location': {
        'latitude': 45.72027557491731,
        'longitude': 21.30106883317469
      }
    }, {
      'location': {
        'latitude': 45.741550493619535,
        'longitude': 21.163955297220785
      }
    }, {
      'location': {
        'latitude': 45.83025800646004,
        'longitude': 21.24645139393059
      }
    }, {
      'location': {
        'latitude': 45.74985291382078,
        'longitude': 21.15622266898971
      }
    }, {
      'location': {
        'latitude': 45.71305680821355,
        'longitude': 21.212899099339435
      }
    }, {
      'location': {
        'latitude': 45.71736237786208,
        'longitude': 21.311939206794
      }
    }, {
      'location': {
        'latitude': 45.72213085219281,
        'longitude': 21.189328101170904
      }
    }, {
      'location': {
        'latitude': 45.81425771911748,
        'longitude': 21.191175536055106
      }
    }, {
      'location': {
        'latitude': 45.832159675200415,
        'longitude': 21.26993669503798
      }
    }, {
      'location': {
        'latitude': 45.732854995935234,
        'longitude': 21.2701124208402
      }
    }, {
      'location': {
        'latitude': 45.78394221127882,
        'longitude': 21.116628980971974
      }
    }, {
      'location': {
        'latitude': 45.730431155834985,
        'longitude': 21.159696922485423
      }
    }, {
      'location': {
        'latitude': 45.70978258265697,
        'longitude': 21.211991488090074
      }
    }, {
      'location': {
        'latitude': 45.73041525936822,
        'longitude': 21.129722805065445
      }
    }, {
      'location': {
        'latitude': 45.695644964476145,
        'longitude': 21.263980594958287
      }
    }, {
      'location': {
        'latitude': 45.780656082234394,
        'longitude': 21.25928146869518
      }
    }, {
      'location': {
        'latitude': 45.709820299881144,
        'longitude': 21.155645636264563
      }
    }, {
      'location': {
        'latitude': 45.68731544975434,
        'longitude': 21.242004710383895
      }
    }, {
      'location': {
        'latitude': 45.81721809200276,
        'longitude': 21.150939741992463
      }
    }, {
      'location': {
        'latitude': 45.80322873161558,
        'longitude': 21.1253966533558
      }
    }, {
      'location': {
        'latitude': 45.76652740450391,
        'longitude': 21.160129642731725
      }
    }, {
      'location': {
        'latitude': 45.82140148259129,
        'longitude': 21.303405299411867
      }
    }, {
      'location': {
        'latitude': 45.77257127950958,
        'longitude': 21.224320842995052
      }
    }, {
      'location': {
        'latitude': 45.7690987781352,
        'longitude': 21.168178937662645
      }
    }, {
      'location': {
        'latitude': 45.73530944369838,
        'longitude': 21.137733072448228
      }
    }, {
      'location': {
        'latitude': 45.744864505475014,
        'longitude': 21.12548144044239
      }
    }, {
      'location': {
        'latitude': 45.822928071460225,
        'longitude': 21.219628472846296
      }
    }, {
      'location': {
        'latitude': 45.68766968820268,
        'longitude': 21.22278242063924
      }
    }, {
      'location': {
        'latitude': 45.779844249423945,
        'longitude': 21.143495898374567
      }
    }, {
      'location': {
        'latitude': 45.719703678092664,
        'longitude': 21.231659008586984
      }
    }, {
      'location': {
        'latitude': 45.74919352897422,
        'longitude': 21.12519921515484
      }
    }, {
      'location': {
        'latitude': 45.74741383735418,
        'longitude': 21.199568353908457
      }
    }, {
      'location': {
        'latitude': 45.80953553545113,
        'longitude': 21.321026992088118
      }
    }, {
      'location': {
        'latitude': 45.75471513699246,
        'longitude': 21.316827867024273
      }
    }, {
      'location': {
        'latitude': 45.760451415914154,
        'longitude': 21.178288473758034
      }
    }, {
      'location': {
        'latitude': 45.82826670340757,
        'longitude': 21.3267677341896
      }
    }, {
      'location': {
        'latitude': 45.7676754541903,
        'longitude': 21.155245398415456
      }
    }, {
      'location': {
        'latitude': 45.69837377939146,
        'longitude': 21.17020182143731
      }
    }, {
      'location': {
        'latitude': 45.723710611934045,
        'longitude': 21.30223770920018
      }
    }, {
      'location': {
        'latitude': 45.811462708062415,
        'longitude': 21.147946335030415
      }
    }, {
      'location': {
        'latitude': 45.833507707094846,
        'longitude': 21.326592972964736
      }
    }, {
      'location': {
        'latitude': 45.762126807777456,
        'longitude': 21.173216494812948
      }
    }, {
      'location': {
        'latitude': 45.70842522097888,
        'longitude': 21.2138181976021
      }
    }, {
      'location': {
        'latitude': 45.77270994952482,
        'longitude': 21.258610979494893
      }
    }, {
      'location': {
        'latitude': 45.69383262128596,
        'longitude': 21.127857018163155
      }
    }, {
      'location': {
        'latitude': 45.73988820153893,
        'longitude': 21.193890721788712
      }
    }, {
      'location': {
        'latitude': 45.77337091643785,
        'longitude': 21.15209524972936
      }
    }, {
      'location': {
        'latitude': 45.77171837399186,
        'longitude': 21.2184402910532
      }
    }, {
      'location': {
        'latitude': 45.79592072654602,
        'longitude': 21.221242186829684
      }
    }, {
      'location': {
        'latitude': 45.70565460823182,
        'longitude': 21.141260255225962
      }
    }, {
      'location': {
        'latitude': 45.788866228747644,
        'longitude': 21.241569331630288
      }
    }, {
      'location': {
        'latitude': 45.692048109036755,
        'longitude': 21.12469750533131
      }
    }, {
      'location': {
        'latitude': 45.8012762895884,
        'longitude': 21.311037441495582
      }
    }, {
      'location': {
        'latitude': 45.78438089086592,
        'longitude': 21.305508428933994
      }
    }, {
      'location': {
        'latitude': 45.77610225269992,
        'longitude': 21.314047382857282
      }
    }, {
      'location': {
        'latitude': 45.69446417681442,
        'longitude': 21.1705198176735
      }
    }, {
      'location': {
        'latitude': 45.79090323490373,
        'longitude': 21.19958477564138
      }
    }, {
      'location': {
        'latitude': 45.68744602307437,
        'longitude': 21.274270016505632
      }
    }, {
      'location': {
        'latitude': 45.69564118572892,
        'longitude': 21.181370328671232
      }
    }, {
      'location': {
        'latitude': 45.78367822367123,
        'longitude': 21.181474142534288
      }
    }, {
      'location': {
        'latitude': 45.809142623309704,
        'longitude': 21.226283816658412
      }
    }, {
      'location': {
        'latitude': 45.806822553252495,
        'longitude': 21.117907620500997
      }
    }, {
      'location': {
        'latitude': 45.69908879515938,
        'longitude': 21.26440425077371
      }
    }, {
      'location': {
        'latitude': 45.68792871531319,
        'longitude': 21.151114381601943
      }
    }, {
      'location': {
        'latitude': 45.760788492374814,
        'longitude': 21.273294753138945
      }
    }, {
      'location': {
        'latitude': 45.796962812226774,
        'longitude': 21.2442808781302
      }
    }, {
      'location': {
        'latitude': 45.77152065830066,
        'longitude': 21.119695871713702
      }
    }, {
      'location': {
        'latitude': 45.72547134135434,
        'longitude': 21.258863072099327
      }
    }, {
      'location': {
        'latitude': 45.68906848200766,
        'longitude': 21.206376054210466
      }
    }, {
      'location': {
        'latitude': 45.70321399053942,
        'longitude': 21.308047036033535
      }
    }, {
      'location': {
        'latitude': 45.696818251782766,
        'longitude': 21.28642895627028
      }
    }, {
      'location': {
        'latitude': 45.79770643951698,
        'longitude': 21.27463570447234
      }
    }, {
      'location': {
        'latitude': 45.77203914626487,
        'longitude': 21.11940778556493
      }
    }, {
      'location': {
        'latitude': 45.6944323633126,
        'longitude': 21.28442007639403
      }
    }, {
      'location': {
        'latitude': 45.7616315275848,
        'longitude': 21.23625994585446
      }
    }, {
      'location': {
        'latitude': 45.73943363973641,
        'longitude': 21.257862942666073
      }
    }, {
      'location': {
        'latitude': 45.737109877038726,
        'longitude': 21.304735372477655
      }
    }, {
      'location': {
        'latitude': 45.821390236131535,
        'longitude': 21.179523266211582
      }
    }, {
      'location': {
        'latitude': 45.73857063535519,
        'longitude': 21.30319161109922
      }
    }, {
      'location': {
        'latitude': 45.75585989731556,
        'longitude': 21.206824155921662
      }
    }, {
      'location': {
        'latitude': 45.744601146483504,
        'longitude': 21.161788820694383
      }
    }, {
      'location': {
        'latitude': 45.69477885254402,
        'longitude': 21.173929882102712
      }
    }, {
      'location': {
        'latitude': 45.80253153783365,
        'longitude': 21.274921040014547
      }
    }, {
      'location': {
        'latitude': 45.74556559324344,
        'longitude': 21.157551894628302
      }
    }, {
      'location': {
        'latitude': 45.80394209085833,
        'longitude': 21.112986130704687
      }
    }, {
      'location': {
        'latitude': 45.763011505089935,
        'longitude': 21.194565120211386
      }
    }, {
      'location': {
        'latitude': 45.78578482263173,
        'longitude': 21.19431940507329
      }
    }, {
      'location': {
        'latitude': 45.73953255060548,
        'longitude': 21.257098516418342
      }
    }, {
      'location': {
        'latitude': 45.68862330692226,
        'longitude': 21.125997119622728
      }
    }, {
      'location': {
        'latitude': 45.734111825271796,
        'longitude': 21.26791471106656
      }
    }, {
      'location': {
        'latitude': 45.82295479400244,
        'longitude': 21.263646094219375
      }
    }, {
      'location': {
        'latitude': 45.7868509210249,
        'longitude': 21.195505575467642
      }
    }, {
      'location': {
        'latitude': 45.72226085815814,
        'longitude': 21.228334817079308
      }
    }, {
      'location': {
        'latitude': 45.81445564920404,
        'longitude': 21.213943501139852
      }
    }, {
      'location': {
        'latitude': 45.80686097724731,
        'longitude': 21.289102566218165
      }
    }, {
      'location': {
        'latitude': 45.694671568238,
        'longitude': 21.32291524451026
      }
    }, {
      'location': {
        'latitude': 45.714168873957895,
        'longitude': 21.154569254603064
      }
    }, {
      'location': {
        'latitude': 45.70305603720174,
        'longitude': 21.187089351166094
      }
    }, {
      'location': {
        'latitude': 45.79920544204132,
        'longitude': 21.15521228016535
      }
    }, {
      'location': {
        'latitude': 45.79936414217961,
        'longitude': 21.158938648514674
      }
    }, {
      'location': {
        'latitude': 45.735306329590465,
        'longitude': 21.21521877381779
      }
    }, {
      'location': {
        'latitude': 45.69685818813868,
        'longitude': 21.31691707001886
      }
    }, {
      'location': {
        'latitude': 45.8171547173182,
        'longitude': 21.17632471195233
      }
    }, {
      'location': {
        'latitude': 45.7045075809536,
        'longitude': 21.26278993037266
      }
    }, {
      'location': {
        'latitude': 45.77323760057926,
        'longitude': 21.207498777850823
      }
    }, {
      'location': {
        'latitude': 45.70354688539454,
        'longitude': 21.15234633724923
      }
    }, {
      'location': {
        'latitude': 45.6849194340831,
        'longitude': 21.1714469068179
      }
    }, {
      'location': {
        'latitude': 45.79544737471762,
        'longitude': 21.276181816328894
      }
    }, {
      'location': {
        'latitude': 45.80788093175791,
        'longitude': 21.13438646828967
      }
    }, {
      'location': {
        'latitude': 45.7939154912886,
        'longitude': 21.233330917161474
      }
    }, {
      'location': {
        'latitude': 45.76540698374396,
        'longitude': 21.190632420613284
      }
    }, {
      'location': {
        'latitude': 45.77739917828806,
        'longitude': 21.136970270998905
      }
    }, {
      'location': {
        'latitude': 45.705813553086244,
        'longitude': 21.203165393678002
      }
    }, {
      'location': {
        'latitude': 45.79693451479702,
        'longitude': 21.29053593651029
      }
    }, {
      'location': {
        'latitude': 45.774933322781905,
        'longitude': 21.302763956518955
      }
    }, {
      'location': {
        'latitude': 45.809971853590554,
        'longitude': 21.13431327748404
      }
    }, {
      'location': {
        'latitude': 45.73336930126132,
        'longitude': 21.28323356235133
      }
    }, {
      'location': {
        'latitude': 45.79052386476668,
        'longitude': 21.303146978708977
      }
    }, {
      'location': {
        'latitude': 45.71124659257039,
        'longitude': 21.2530278278353
      }
    }, {
      'location': {
        'latitude': 45.72519505497274,
        'longitude': 21.112567863912446
      }
    }, {
      'location': {
        'latitude': 45.77511521138197,
        'longitude': 21.179594956839953
      }
    }, {
      'location': {
        'latitude': 45.806909299093434,
        'longitude': 21.301125804745805
      }
    }, {
      'location': {
        'latitude': 45.72289313418716,
        'longitude': 21.174510469379133
      }
    }, {
      'location': {
        'latitude': 45.827057319979176,
        'longitude': 21.147385679705902
      }
    }, {
      'location': {
        'latitude': 45.715331199091175,
        'longitude': 21.27664250219097
      }
    }, {
      'location': {
        'latitude': 45.686894906481854,
        'longitude': 21.253470652874796
      }
    }, {
      'location': {
        'latitude': 45.78835162297375,
        'longitude': 21.317043861681526
      }
    },
      { 'location': {
        'latitude': 45.8021756062037, 'longitude': 21.114469254587693
      }
      }
      ];

    console.log(locations)
    // Check if the map is initialized
    // locations.forEach((location: any) => {
    //   new google.maps.Marker({
    //     position: {
    //       lat: location['location']['latitude'],
    //       lng: location['location']['longitude'],
    //     },
    //     map: this.map,
    //     title: location['displayName']['text'],
    //   });
    // });

    generatedLocations.forEach((location: any) => {
      new google.maps.Marker({
        position: {
          lat: location['location']['latitude'],
          lng: location['location']['longitude'],
        },
        map: this.map,
        title: 'title',
      });
    });
  }
}
