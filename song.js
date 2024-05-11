var score2 = 0;
var user = 1;


const songsArray = [
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "rank": 1,
    "description": "Popular Songs  <br><a href='https://youtu.be/XzOvgu3GPwY?si=wS4Q2Ly_aVFF_V9L'>Karma ft. Ice Spice</a>  <br><a href='https://www.youtube.com/watch?v=2JgvVfOfoWI'>Style (Taylor's Version)</a>  <br><a href='https://www.youtube.com/watch?v=ic8j13piAhQ'>Cruel Summer</a> <br><a href='https://www.youtube.com/watch?v=K-a8s8OLBSE'>Cardigan</a> <br><a href='https://www.youtube.com/watch?v=XqN2qFvY64U'>Anti-Hero</a>"
  },
  {
    "artist": "Morgan Wallen",
    "genre": "Country",
    "rank": 2,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=bUjPPBxbQrQ'>Last Night</a>  <br><a href='https://www.youtube.com/watch?v=5DCdL1zdpdM'>Thinkin’ Bout Me</a>  <br><a href='https://www.youtube.com/watch?v=Dw9VmOLwxoM'>Thought You Should Know</a> <br><a href='https://www.youtube.com/watch?v=3CkLMG5NwUg'>You Proof</a> <br><a href='https://www.youtube.com/watch?v=aN7WCsC9nkI'>Lies Lies Lies</a>"
  },
  {
    "artist": "SZA",
    "genre": "R&B",
    "rank": 3,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=MSRcC626prw'>Kill Bill</a> <br><a href='https://www.youtube.com/watch?v=LDY_XyxBu8A'>Snooze</a> <br><a href='https://www.youtube.com/watch?v=V2G8ESoDXm8'>Saturn</a> <br><a href='https://www.youtube.com/watch?v=2p3zZoraK9g'>Good Days</a> <br><a href='https://www.youtube.com/watch?v=NNd_ufPG3x4'>Nobody Gets Me</a>"
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "rank": 4,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=xpVfcZ0ZcFM'>God's Plan</a> <br><a href='https://www.youtube.com/watch?v=7LnBvuzjpr4'>Energy</a> <br><a href='https://www.youtube.com/watch?v=uxpDa-c-4Mc'>Hotline Bling</a> <br><a href='https://www.youtube.com/watch?v=-zzP29emgpg'>Take Care ft. Rihanna</a> <br><a href='https://www.youtube.com/watch?v=cimoNqiulUE'>Headlines</a>"
  },
  {
    "artist": "Luke Combs",
    "genre": "Country",
    "rank": 5,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=aoJwvnDuAR0'>Where The Wild Things Are</a>  <br><a href='https://www.youtube.com/watch?v=BixwVsiDdZM'>Hurricane</a>  <br><a href='https://www.youtube.com/watch?v=uXyxFMbqKYA'>When It Rains It Pours</a> <br><a href='https://www.youtube.com/watch?v=27nRqoBQLl4'>Love You Anyway</a> <br><a href='https://www.youtube.com/watch?v=Ct9BFr9XBaI'>One Number Away</a>"
  },
  {
    "artist": "Zach Bryan",
    "genre": "Country",
    "rank": 6,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=ZVVvJjwzl6c'>I Remember Everything</a>  <br><a href='https://www.youtube.com/watch?v=FJqd58_WgGo'>Oklahoma Smokeshow</a>  <br><a href='https://www.youtube.com/watch?v=lA8F9sIhGdg'>Something In Orange</a> <br><a href='https://www.youtube.com/watch?v=dc3Gp4nEq_s'>Dawns</a> <br><a href='https://www.youtube.com/watch?v=LZtiONeyMYY'>The Way Back</a>"
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B",
    "rank": 7,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=f1r0XZLNlGQ'>One of the Girls ft. Jennie & Lily Rose Depp</a> <br><a href='https://www.youtube.com/watch?v=OlStmta0Vh4'>I Was Never There</a> <br><a href='https://www.youtube.com/watch?v=XXYlFuWEuKI'>Save Your Tears</a> <br><a href='https://www.youtube.com/watch?v=uPD0QOGTmMI'>Die For You</a> <br><a href='https://www.youtube.com/watch?v=34Na4j8AVgA'>Starboy ft. Daft Punk</a>"
  },
  {
    "artist": "21 Savage",
    "genre": "Hip Hop",
    "rank": 8,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=U4mADkt6o-M'>Redrum</a>  <br><a href='https://www.youtube.com/watch?v=DmWWqogr_r8'>A Lot ft. J Cole</a>  <br><a href='https://www.youtube.com/watch?v=ZZ6VhTBcc-c'>Runnin’</a> <br><a href='https://www.youtube.com/watch?v=cUtDb-blEMQ'>Immortal</a> <br><a href='https://www.youtube.com/watch?v=1r8BcVqXKlQ'>All The Smoke</a>"
  },
  {
    "artist": "Miley Cyrus",
    "genre": "Pop",
    "rank": 9,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=G7KNmW9a75Y'>Flowers</a>  <br><a href='https://www.youtube.com/watch?v=M11SvDtPBhA'>Party In The USA</a>  <br><a href='https://www.youtube.com/watch?v=4q-Y6wt1h3k'>Jaded</a> <br><a href='https://www.youtube.com/watch?v=IZ3XMOdOdKM'>Used To Be Young</a> <br><a href='https://www.youtube.com/watch?v=LrUvu1mlWco'>We Cant Stop</a>"
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop",
    "rank": 10,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=IzPQ_jA00bk'>Chemical</a>  <br><a href='https://www.youtube.com/watch?v=wXhTHyIgQ_U'>Circles</a>  <br><a href='https://www.youtube.com/watch?v=7aekxC_monc'>I Like You ft. Doja Cat</a> <br><a href='https://www.youtube.com/watch?v=UYwF-jdcVjY​​'>Better Now</a> <br><a href='https://www.youtube.com/watch?v=au2n7VVGv_c'>Psycho</a>"
  },
  {
    "artist": "Metro Boomin",
    "genre": "Hip Hop",
    "rank": 11,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=-kSAvHlXRUs'>Young Metrol</a>  <br><a href='https://www.youtube.com/watch?v=_WCD3Z9UmJ4'>Superhero</a>  <br><a href='https://www.youtube.com/watch?v=N9bKBAA22Go'>Like That</a> <br><a href='https://youtu.be/NyTkaQHdySM?si=4ceaPsTxrXgyOb9y​​'>Too Many Nights</a> <br><a href='https://youtu.be/qBWhc4qbsjo?si=AELdN9ptMA1HQET5'>Space Cadet ft. Gunna</a>"
  },
  {
    "artist": "Peso Pluma",
    "genre": "Latin",
    "rank": 12,
    "description": "Popular Songs  <br><a href='https://youtu.be/8ttz1wdViys?si=9NW6i0NNDjAkoCpH'>Bye</a>  <br><a href='https://youtu.be/xjkeSrj-u-A?si=50k13hhPbrAtO_b6'></a>Bipolar  <br><a href='https://youtu.be/3mchJ-EW9rM?si=l9fdb_FGS7_ldXbX'>La Bebe</a> <br><a href='https://youtu.be/b2wQtu9YnWk?si=mUvtNlgg90Dj6pdL​​'>Chanel ft. Becky G</a> <br><a href='https://youtu.be/f7XYWF4fpik?si=lGKQSl_A91Xe4FKu'>Plebada</a>"
  },
  {
    "artist": "Travis Scott",
    "genre": "Hip Hop",
    "rank": 13,
    "description": "Popular Songs  <br><a href='https://youtu.be/6ONRf7h3Mdk?si=NsTWTxyQkLbXh4DE'>Sicko Mode ft. Drake</a>  <br><a href='https://youtu.be/X7aF3nZOS98?si=Fv-bVKVBtJ3sb30D'>I Know</a> <br><a href='https://youtu.be/Dst9gZkq1a8?si=bpBe1CU7YNGsLmMW'>Goosebumps</a> <br><a href='https://youtu.be/tfSS1e3kYeo?si=8NCR0QKcQ7gbYQe-​​'>Highest In the Room</a> <br><a href='https://youtu.be/U-l4ya3ejko?si=Dajmjqu5zyAVhJGX'>Fein ft. Playboy Carti</a>"
  },
  {
    "artist": "Harry Styles",
    "genre": "Pop",
    "rank": 14,
    "description": "Popular Songs  <br><a href='https://youtu.be/H5v3kku4y6Q?si=QVSKtUuxJo2TfQYV'>As It Was</a>  <br><a href='https://youtu.be/qN4ooNx77u0?si=IU8WqS84LP_HiMIK'>Sign Of The Times</a> <br><a href='https://youtu.be/E07s5ZYygMg?si=p5OejuRbCvdjf-E2'>Watermelon Sugar</a> <br><a href='https://youtu.be/P3cffdsEXXw?si=RVS2KkMF6ikc3Jcr'>Golden</a> <br><a href='https://youtu.be/VF-r5TtlT9w?si=75n7SVZcZzmUDCaI'>Adore You</a>"
  },
  {
    "artist": "Bad Bunny",
    "genre": "Latin",
    "rank": 15,
    "description": "Popular Songs  <br><a href='https://youtu.be/bef8QLNHubw?si=w57-uF3y8Hzhwd0V'>Where She Goes</a>  <br><a href='https://youtu.be/p38WgakuYDo?si=rYTwJsawBKWdcwLl'>Moscow Mule</a> <br><a href='https://youtu.be/doLMt10ytHY?si=q1672AisiiM3nt3_'>Yonaguni</a> <br><a href='https://youtu.be/OSUxrSe5GbI?si=CevfjYYOlJouR1xtr'>Mia ft. Drake</a> <br><a href='https://youtu.be/_PJvpq8uOZM?si=ivzqLIyf7LXaGvHH'>Monaco</a>"
  },
  {
    "artist": "Olivia Rodrigo",
    "genre": "Pop",
    "rank": 16,
    "description": "Popular Songs  <br><a href='https://youtu.be/QXcjPySjdJU?si=XE8trrmCjeBjzg32'>Obsessed</a>  <br><a href='https://youtu.be/RlPNh_PBZb4?si=KY4k2Jm0aF2lXfMJ'>Vampire</a> <br><a href='https://youtu.be/cii6ruuycQA?si=DQKC77m7XKya_p3E'>Deja Vu</a> <br><a href='https://youtu.be/ZmDBbnmKpqQ?si=6PkF97AoUpp-UcWB'>Drivers License</a> <br><a href='https://youtu.be/gNi_6U5Pm_o?si=qf3f2LjEnurU213y'>Good 4 u</a>"
  },
  {
    "artist": "Bailey Zimmerman",
    "genre": "Country",
    "rank": 17,
    "description": "Popular Songs  <br><a href='https://youtu.be/UYCWaK6Sbik?si=NNzCHjZwlj_e_gP1'>Religously</a>  <br><a href='https://youtu.be/WVh073Yujmo?si=uNCWo5fvaYPP22tc'>Where It Ends</a> <br><a href='https://youtu.be/d1yKrnPHAmo?si=oWhFM-UeBOU73ZoD'>Fall In Love</a> <br><a href='https://youtu.be/QyapQFCHUlg?si=siQMnyQwixZDD5-Z'>Rock And A Hard Place</a> <br><a href='https://youtu.be/9C982wyEDco?si=nEezRTFJ6vlrJp6L'>Holy Smokes</a>"
  },
  {
    "artist": "Rod Wave",
    "genre": "Hip Hop",
    "rank": 18,
    "description": "Popular Songs  <br><a href='https://youtu.be/nM6ayGKXFCw?si=k6ZVUbFfziMHrAW8'>Great Gatsby</a>  <br><a href='https://youtu.be/vhUD-j1JWGo?si=C-ym2r5sQaUN2LvT'>Long Journey</a> <br><a href='https://youtu.be/6dW4d0IcQ3k?si=U1XDVO4sBWgBbzBG'>Fight The Feeling</a> <br><a href='https://youtu.be/-Hu_Q4W8M6g?si=V5hPnsI_0Q7PQZ34'>Boyz Dont Cry</a> <br><a href='https://youtu.be/wo9AlOrQ3iE?si=V7yugzYpEJpksyeu'>Tombstone</a>"
  },
  {
    "artist": "Lil Baby",
    "genre": "Hip Hop",
    "rank": 19,
    "description": "Popular Songs  <br><a href='https://youtu.be/nUEqPtVGIpE?si=K3J_65-btkOOYGYE'>Woah</a>  <br><a href='https://youtu.be/WyhU6Zb_fhY?si=Z5ZG-xYf3h4H8eaM'>California Breeze</a> <br><a href='https://youtu.be/_VDGysJGNoI?si=69CZOUAWPQnYDW58'>The Bigger Picture</a> <br><a href='https://youtu.be/iXUPeEuM1CM?si=y3uMpeovJ2Ufe4SS'>Emotionally Scarred</a> <br><a href='https://youtu.be/MHryuYVyHhk?si=dNs6xr0TgOYeVK7S'>Freestyle</a>"
  },
  {
    "artist": "Beyonce",
    "genre": "R&B",
    "rank": 20,
    "description": "Popular Songs  <br><a href='https://youtu.be/238Z4YaAr1g?si=ZvEa3-occnv7q_3T'>Texas Hold Em</a>  <br><a href='https://youtu.be/Ob7vObnFUJc?si=b1Ne3CFj4mo7GwxX'>Love On Top</a> <br><a href='https://youtu.be/4m1EFMoRFvY?si=TGlVjTV1DbJ4OJ4L'>Single Ladies</a> <br><a href='https://youtu.be/bnVUHWCynig?si=GHTT8IPfdxOJAAbb'>Halo</a> <br><a href='https://youtu.be/JlxByc0-V40?si=HSEFhtVv7smZeJKa'>Sweet Dreams</a>"
  },
  {
    "artist": "Lil Uzi Vert",
    "genre": "Hip Hop",
    "rank": 21,
    "description": "Popular Songs  <br><a href='https://youtu.be/UhbixyxgsiU?si=gyjOgbhA4Gmwv-cq'>Just Wanna Rock</a>  <br><a href='https://youtu.be/2NzuR5OLvnQ?si=T_y9qdpLo1f52bNO'>Red Moon</a> <br><a href='https://youtu.be/zqflC-as2Qo?si=ApSdEk1l5cJUG0gx'>Do What I Want</a> <br><a href='https://youtu.be/1eoSanFCU-M?si=Zje_2abT6feYOyS_'>Money Longer</a> <br><a href='https://youtu.be/Vi2XaiKhgiU?si=6x6g0BKv1ieyBZ-1'>The Way Life Goes</a>"
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "rank": 22,
    "description": "Popular Songs  <br><a href='https://youtu.be/lp-EO5I60KA?si=FY-HYScI-eBjntDd'>Thinking Out Loud</a>  <br><a href='https://youtu.be/2Vv-BfVoq4g?si=tWZjwmPRjgC1FmW7'>Perfect</a> <br><a href='https://youtu.be/Il0S8BoucSA?si=z8XPgjqEH3WY8U_j'>Shivers</a> <br><a href='https://youtu.be/FOjdXSrtUxA?si=sA9QHYDQnqlsZjrr'>Give Me Love</a> <br><a href='https://youtu.be/CfkxLRuSteI?si=iPX-EyEBhyiM0e0w'>Antisocial ft. Travis Scott</a>"
  },
  {
    "artist": "Karol G",
    "genre": "Latin",
    "rank": 23,
    "description": "Popular Songs  <br><a href='https://youtu.be/NNvqaI6D5vM?si=Qi0cOIQTKUiRRJj6'>Contigo</a>  <br><a href='https://youtu.be/AqG0GF_LA0Q?si=CrwKNa-Xz4OkR9Z9'>Watati</a> <br><a href='https://youtu.be/ca48oMV59LU?si=VBqWE2jcSWR13Hn8'>Provenza</a> <br><a href='https://youtu.be/tbneQDc2H3I?si=kG_KANMkpbf09uX4'>Tusa ft. Nicki Minaj</a> <br><a href='https://youtu.be/QaXhVryxVBk?si=BkTtEfuGjkC0gLf7'>Bichota</a>"
  },
  {
    "artist": "Lil Durk",
    "genre": "Hip Hop",
    "rank": 24,
    "description": "Popular Songs  <br><a href='https://youtu.be/abZ15xSBlnM?si=6hqNy8TuznDSpTqv'>Old Days</a>  <br><a href='https://youtu.be/Z4N8lzKNfy4?si=78FAQf4JExop8twv'>All My Life ft. J Cole</a> <br><a href='https://youtu.be/Ty-CHgmCeKw?si=TYMTpBDM74DtUfU5'>Backdoor</a> <br><a href='https://youtu.be/CnT6NRiTz9M?si=Qzh8sbeXsJzvZ9Rt'>Hanging With Wolves</a> <br><a href='https://youtu.be/VjMKmJDT_qU?si=_NL1So0Sofp7HCzS'>When We Shoot</a>"
  },
  {
    "artist": "Ice Spice",
    "genre": "Hip Hop",
    "rank": 25,
    "description": "Popular Songs  <br><a href='https://youtu.be/CUj2AWEJnwQ?si=Qy4PpNyvhrLJAf41'>Barbie World ft. Nicki Minaj</a>  <br><a href='https://youtu.be/gMq-I0dejjE?si=J2O3BH6_MqwUBj0O'>Princess Diana ft. Nicki Minaj</a> <br><a href='https://youtu.be/Ou7c8Sg9YVg?si=VCKr7WA196QJimpd'>Think U The Fart</a> <br><a href='https://youtu.be/UqmUxkRPBS0?si=WziwoQ5_5RAoNFag'>Deli</a> <br><a href='https://youtu.be/yF-NC3eRsqc?si=qrwaY9KvrmqjO7_7'>Munch</a>"
  },
  {
    "artist": "Gunna",
    "genre": "Hip Hop",
    "rank": 26,
    "description": "Popular Songs  <br><a href='https://youtu.be/Tqjw-H4QyG0?si=VM9ncEhEJB6ZbAKF'>Prada Dem</a>  <br><a href='https://youtu.be/l21wGxlWwPw?si=GEKp-tCN0bvGyC4h'>Fukumean</a> <br><a href='https://youtu.be/7jAgLRk-sPc?si=n_Ti6YGlOG9dhH-J'>Back To The Moon</a> <br><a href='https://youtu.be/o_smxk-P5p4?si=VBkfEKgnYwPpUCvy'>Wunna</a> <br><a href='https://youtu.be/M8IDH7ClGRg?si=yAi-TF3Y0nZgnVak'>Rodeo Dr</a>"
  },
  {
    "artist": "Chris Brown",
    "genre": "R&B",
    "rank": 27,
    "description": "Popular Songs  <br><a href='https://youtu.be/_t0qtSKOpO4?si=3Vb9FvQkpUt2gRWl'>Sensational</a>  <br><a href='https://youtu.be/wWR0VD6qgt8?si=3Ov8VWqf5MPm0EuI'>Angel Numbers</a> <br><a href='https://youtu.be/pfxyk1glEq4?si=Rn2-kfFp1kXvH6UK'>Under The Influence</a> <br><a href='https://youtu.be/xnumI3_qt-w?si=ZdTmgcuZnLk1E_Vv'>How We Roll</a> <br><a href='https://youtu.be/JXRN_LkCa_o?si=NMcFWb0rg9tuKY8c'>Loyal</a>"
  },
  {
    "artist": "Doja Cat",
    "genre": "Hip Hop",
    "rank": 28,
    "description": "Popular Songs  <br><a href='https://youtu.be/m4_9TFeMfJE?si=F3JjAP5672YliYzR'>Paint The Town Red</a>  <br><a href='https://youtu.be/0c66ksfigtU?si=dFRedVgl9eWK7S10'>Agora Hills</a> <br><a href='https://youtu.be/0EVVKs6DQLo?si=y7zLpzLziChWsSnV'>Kiss Me More ft. SZA</a> <br><a href='https://youtu.be/dI3xkL7qUAc?si=KPE0SuieH1dUEq8O'>Need To Know</a> <br><a href='https://youtu.be/jJdlgKzVsnI?si=QEvoDClb0DU_hIjM'>Streets</a>"
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop",
    "rank": 29,
    "description": "Popular Songs  <br><a href='https://youtu.be/N9bKBAA22Go?si=E86aWqW3Cvv4RHw-'>Like That</a>  <br><a href='https://youtu.be/tvTRZJ-4EyI?si=wRFvAHKGo2kEWfOA'>Humble</a> <br><a href='https://youtu.be/Z-48u_uWMHY?si=BqXMFZ6US7-Unvly'>Alright</a> <br><a href='https://youtu.be/5GhhVHpPR_M?si=CznnhzKDwhZpYIv4'>Count Me Out</a> <br><a href='https://youtu.be/JQbjS0_ZfJ0?si=cNXtZKndOVF4O7if'>All The Stars ft. SZA</a>"
  },
  {
    "artist": "Tyler The Creator",
    "genre": "Hip Hop",
    "rank": 30,
    "description": "Popular Songs  <br><a href='https://youtu.be/TGgcC5xg9YI?si=WFmbOkJ44Qf0CzK4'>See You Again</a>  <br><a href='https://youtu.be/FUXX55WqYZs?si=Fxi0vv5Rh__-gRkk'>Who Dat Boy</a> <br><a href='https://youtu.be/XSbZidsgMfw?si=JJbBd9-d1ILXp4f4'>Yonkerst</a> <br><a href='https://youtu.be/mFNaFeIm4bU?si=Wts8c6jDxFPbzw8A'>She</a> <br><a href='https://youtu.be/NkMTKGM-efw?si=qXnG1mRL5xbX2MPA'>Best Interest</a>"
  },
  {
    "artist": "Future",
    "genre": "Hip Hop",
    "rank": 32,
    "description": "Popular Songs  <br><a href='https://youtu.be/N9bKBAA22Go?si=U4Oy0h0ccw5fvEFI'>Like That</a>  <br><a href='https://youtu.be/I0fgkcTbBoI?si=zmZcDwCMMSu6Wb9F'>Type Shit</a> <br><a href='https://youtu.be/FAeAp9MzPtk?si=JbDs4sQIssVK2WxQ'>Honest</a> <br><a href='https://youtu.be/K_9tX4eHztY?si=QihSLhU1-CvMiCPD'>Low Life</a> <br><a href='https://youtu.be/3gt-rxxs-RQ?si=QgKo9BvXLC9KvehN'>Wicked</a>"
  },
  {
    "artist": "Juice WRLD",
    "genre": "Hip Hop",
    "rank": 33,
    "description": "Popular Songs  <br><a href='https://youtu.be/iI34LYmJ1Fs?si=Uihbx08Ch_lgd4CP'>Robbery</a>  <br><a href='https://youtu.be/C5i-UnuUKUI?si=K755llPqJVTjKQ4I'>Wishing Well</a> <br><a href='https://youtu.be/mzB1VGEGcSU?si=kO_N4v868193-tfX'>Lucid Dreams</a> <br><a href='https://youtu.be/f74GYIVMk3I?si=oISOuPtK-ZBlYGBd'>Already Dead</a> <br><a href='https://youtu.be/5SejM_hBvMM?si=Firn3bKe3dXestLo'>Lean Wit Me</a>"
  },
  {
    "artist": "Nicki Minaj",
    "genre": "Hip Hop",
    "rank": 35,
    "description": "Popular Songs  <br><a href='https://www.youtube.com/watch?v=5KDy94cpTS4'>Needle ft. Drake</a> <br><a href='https://www.youtube.com/watch?v=BPV6LuDn-fk'>Last Time I Saw You</a> <br><a href='https://www.youtube.com/watch?v=QBGX9QirWaU'>Red Ruby Da Sleeze</a> <br><a href='https://www.youtube.com/watch?v=SeIJmciN8mo'>Starships</a> <br><a href='https://www.youtube.com/watch?v=4JipHEz53sU'>Super Bass</a>"
  },
  {
    "artist": "Rihanna",
    "genre": "R&B",
    "rank": 40,
    "description": "Popular Songs  <br><a href='https://youtu.be/wfN4PVaOU5Q?si=hcmoAyIirO7a-8oi'>Needed Me</a>  <br><a href='https://youtu.be/lWA2pjMjpBs?si=MuZlN3aMXGIMtKE5'>Diamonds</a> <br><a href='https://youtu.be/49lY0HqqUVc?si=VMOYNfcL6I4iXsKt'>Kiss It Bettert</a> <br><a href='https://youtu.be/J3UjJ4wKLkg?si=Mjkqdnk6d84fF-fZ'>Take A Bow</a> <br><a href='https://youtu.be/HL1UzIK-flA?si=UByCJKRfj6TpAscb'>Work ft. Drake</a>"
  },
  {
    "artist": "Billie Eilish",
    "genre": "Pop",
    "rank": 43,
    "description": "Popular Songs  <br><a href='https://youtu.be/cW8VLC9nnTo?si=SBYmJazMqbX-Nxpy'>What Was I Made For</a>  <br><a href='https://youtu.be/V1Pl8CzNzCw?si=FBJevy5H1TqMBCeu'>Lovely</a> <br><a href='https://youtu.be/EgBJmlPo8Xw?si=_wAl_rzQM-hNFduU'>Everything I Wanted</a> <br><a href='https://youtu.be/viimfQi_pUw?si=g_-DTocWDeJRaLLD'>Ocean Eyes</a> <br><a href='https://youtu.be/skHbZBsS7hM?si=bGZE0K5kSiXjyeRa'>Hostage</a>"
  },
  {
    "artist": "Dua Lipa",
    "genre": "Pop",
    "rank": 44,
    "description": "Popular Songs  <br><a href='https://youtu.be/suAR1PYFNYA?si=mpgkuffJ6GqSX1B_'>Houdinir</a>  <br><a href='https://youtu.be/OiC1rgCPmUQ?si=3Hof7-TBPovnDRv9'>Dance The Night</a> <br><a href='https://youtu.be/ZjBZ8MUnB0E?si=ePdy66bqMp-6N_Ap'>Training Season</a> <br><a href='https://youtu.be/k2qgadSvNyU?si=TIR64FyQxbtYVyxw'>New Rules</a> <br><a href='https://youtu.be/BC19kwABFwc?si=AyIrKtDs1LYvj_e1'>Love Again</a>"
  },
  {
    "artist": "Selena Gomez",
    "genre": "Pop",
    "rank": 46,
    "description": "Popular Songs  <br><a href='https://youtu.be/WcIcVapfqXw?si=VgwIrZdtQbn7-Rw5'>Calm Down ft. Rema</a>  <br><a href='https://youtu.be/mNHNktxbjdk?si=jpCYprRMcIM8LVwh'>Love On</a> <br><a href='https://youtu.be/yOuqn4w1ozA?si=fg2cUlmSYvG_8zhF'>Single Soon</a> <br><a href='https://youtu.be/n-D1EB74Ckg?si=p5eGeDIT7N58HdqG'>Come And Get it</a> <br><a href='https://youtu.be/1TsVjvEkc4s?si=Z4Tn7UpRNW0TNP9g'>Good For You</a>"
  },
  {
    "artist": "Eminem",
    "genre": "Hip Hop",
    "rank": 50,
    "description": "Popular Songs  <br><a href='https://youtu.be/eJO5HU_7_1w?si=5WPv9OyjRUh0QE8z'>The Real Slim Shady</a>  <br><a href='​​https://youtu.be/YVkUvmDQ3HY?si=DnKl_ya7_OWYOyF6'>Without Me</a> <br><a href='https://youtu.be/_Yhyp-_hX2s?si=nm7Lkh1bOQjoBL4a'>Lose Yourself</a> <br><a href='https://youtu.be/r_0JjYUe5jo?si=033dbtYXnEtHnPfv'>Godzilla</a> <br><a href='https://youtu.be/S9bCLPwzSC0?si=8bLkOFehBPuP1kYY'>Mockingbird</a>"
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Pop",
    "rank": 55,
    "description": "Popular Songs  <br><a href='https://youtu.be/TdrL3QxjyVw?si=mxd9Y2LSF8YIO3J7'>Summer Time Sadness</a>  <br><a href='https://youtu.be/MiAoetOXKcY?si=Ti7BTnje8u8jHU70'>Say Yes To Heaven</a> <br><a href='https://youtu.be/Bag1gUxuU0g?si=p0MwepIQqhjXC-DV'>Born To Die</a> <br><a href='https://youtu.be/3-NTv0CdFCk?si=fpEHfcGdEVU180lJ'>Love</a> <br><a href='https://youtu.be/eP4eqhWc7sI?si=psZdzwdzMzj99F-O'>Lust For Life</a>"
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "rank": 59,
    "description": "Popular Songs  <br><a href='https://youtu.be/KNtJGQkC-WI?si=XLaRrhOmrLBSe57v'>We Can’t Be Friends</a>  <br><a href='https://youtu.be/eB6txyhHFG4?si=QeqkEapzQax_zgZN'>Yes, And</a> <br><a href='https://youtu.be/ZqCWXdZFc58?si=vLX7xiIxQaYN950k'>The Boy Is Mine</a> <br><a href='https://youtu.be/p7jATa6Soag?si=iv1Ssjh9F6WV3VHd'>Intro</a> <br><a href='https://youtu.be/ffxKSjUwKdU?si=dpkMVHBWzKEH1lXw'>No Tears Left To Cry</a>"
  },
];

let songs = songsArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplaysongs(songs, 'a-z');
        });



function clearSearch() {
    document.getElementById('artistSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    sortAndDisplaysongs(songs, 'a-z');
}



function showDetails(song) {
const artistId = song.artist.replace(/\s+/g, '_');
currentsong = song.artist.replace(/\s+/g, '_');
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('songDetails');
    details.innerHTML = ` <button id="closeOverlay" onclick="closeOverlay()">Close</button>

<h2>${song.artist}</h2>
<div class="songContent">	
    <div class="textDetails">
            <p><strong>Rank:</strong> ${song.rank}</p>
            <p><strong>Genre:</strong> ${song.genre}</p>
            <div class="songDescription">${song.description}</div>



     <div class="star-rating" id="starRating_${artistId}">
                ${generateStarRatingHTML(artistId, song.score || 0)}
            </div>


            <div class="comment-section">
                <textarea placeholder="Add a comment..." id="commentInput"></textarea>
                <button onclick="postComment()">Post Comment</button>
                <div id="commentDisplay"></div>
            </div>




     </div>




     <div class="songPoster">
     <img src="songs/${song.artist.replace(/:/g, '')}.jpg" alt="${song.artist}" class="songPoster">
     </div>




        </div>
    `;

    overlay.style.display = 'flex';
    overlay.classList.add('active');

   // Attach event listeners for star rating
      const starRatingDiv = document.getElementById(`starRating_${artistId}`);
      if (starRatingDiv) {
          starRatingDiv.addEventListener('click', event => {
              if (event.target.matches('label')) {
                  const score = parseInt(event.target.dataset.value);
      score2 = score;
                  updateSongRating(song, score);
                  // Update star ratings appearance
                  const labels = starRatingDiv.querySelectorAll('label');
                  const selectedRating = parseInt(event.target.dataset.value);
                  labels.forEach((label, index) => {
                      if (index < selectedRating) {
                          label.classList.add('selected');
                      } else {
                          label.classList.remove('selected');
                      }
                  });
              }
          });
      } else {
          console.error(`Element with ID 'starRating_${artistId}' not found.`);
      }
  }

  function generateStarRatingHTML(artistId, score) {
      let starsHTML = '';
  score2 = score;
  for (let i = 1; i <= 5; i++) {
          const checked = i === score ? 'selected' : '';
          starsHTML += `
              <input type="radio" id="star_${artistId}_${i}" name="score_${artistId}" value="${i}" style="display:none;">
              <label for="star_${artistId}_${i}" data-value="${i}" class="star ${checked}">&#9733;</label>
          `;
      }
      return starsHTML;
  }


  function updateSongRating(song, score) {
      console.log(`Updating rating for song '${song.artist}' to ${score}`);
  }

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
  overlay.style.transition = 'opacity 0.1s linear';
        overlay.classList.remove('active');

    }
}
function showOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

function postComment(artistId) {

var input = document.getElementById('commentInput');
    var commentDisplay = document.getElementById('commentDisplay');

    var newComment = document.createElement('div');
    newComment.classList.add('comment'); 

    var nameSpan = document.createElement('span');
    nameSpan.classList.add('name');
    nameSpan.textContent = 'User ' + String(user);
  user = user + 1; 
    newComment.appendChild(nameSpan);



    var ratingSpan = document.createElement('ratingSpan');
    ratingSpan.classList.add('rating');


ratingSpan.textContent = "    " + "★".repeat(score2) + "☆".repeat(5-score2);

      newComment.appendChild(ratingSpan);

      var textDiv = document.createElement('div');
      textDiv.classList.add('text');
      textDiv.textContent = input.value;
      newComment.appendChild(textDiv);

      commentDisplay.appendChild(newComment);

      input.value = '';
  }



document.getElementById('sortOptions').addEventListener('change', function() {
  currentSortOption = this.value;
updatesongs();

});

function updatesongs() {
    const artistSearchValue = document.getElementById('artistSearch').value.toLowerCase();
    const filteredsongs = songs.filter(song => song.artist.toLowerCase().includes(artistSearchValue));
  currentSortOption = document.getElementById('sortOptions').value;
    sortAndDisplaysongs(filteredsongs, currentSortOption);
}

document.getElementById('genreOptions').addEventListener('change', function() {
    const selectedGenre = this.value;
    if (selectedGenre === 'all') {
        // If 'All Genres' is selected, reset to default sorting
        sortAndDisplaysongs(songs, document.getElementById('sortOptions').value);
    } else {
        // If a specific genre is selected, sort and display songs by that genre
        sortsongsByGenre(selectedGenre);
    }
});

function sortsongsByGenre(genre) {
    const filteredSongsByGenre = songs.filter(song => song.genre === genre);
    sortAndDisplaysongs(filteredSongsByGenre, document.getElementById('sortOptions').value);
}


function sortAndDisplaysongs(songsToSort, sortOption) {
    let sortedsongs = [...songsToSort]; 

    switch (sortOption) {
        case 'rank':
            sortedsongs.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
            break;
        case 'a-z':
            sortedsongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'z-a':
            sortedsongs.sort((a, b) => b.artist.localeCompare(a.artist));
            break;
    }

    loadsongs(sortedsongs);
}
function sortsongs() {
    const sortValue = document.getElementById('sortOptions').value;
    let sortedsongs = [...songs]; 

console.log('Sorting songs by: ', sortValue);
console.log('Sorted songs: ', sortedsongs);
    switch (sortValue) {
        case 'rank':
            sortedsongs.sort((a, b) => b.rank - a.rank);
            break;
        case 'a-z':
            sortedsongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'z-a':
            sortedsongs.sort((a, b) => b.artist.localeCompare(a.artist));
            break;
    }

    loadsongs(sortedsongs);
}

function searchsongs() {
    const artistSearchValue = document.getElementById('artistSearch').value.toLowerCase();
    const filteredsongs = songs.filter(song => {
        return song.artist.toLowerCase().includes(artistSearchValue); 
    });
    loadsongs(filteredsongs);

}

document.getElementById('artistSearch').addEventListener('input', updatesongs);

function loadsongs(filteredsongs = songs) {
    const grid = document.getElementById('songsGrid');
    grid.innerHTML = '';
    filteredsongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'songItem';
        songItem.innerHTML = `<img src="songs/${song.artist.replace(/:/g, '')}.jpg" alt="${song.artist}" style="width:100%"><h3>${song.artist}</h3>`;
        songItem.onclick = () => showDetails(song);
        grid.appendChild(songItem);
    });
  document.getElementById('songCount').textContent = `${filteredsongs.length} results`;
}

