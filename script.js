const moviesArray = [
  {
    "year": 1991.0,
    "title": "Terminator 2: Judgment Day",
    "genre": "Action,Sci-Fi",
    "rating": 8.6,
    "description": "In this sequel set eleven years after \"The Terminator,\" young John Connor (Edward Furlong), the key to civilization's victory over a future robot uprising, is the target of the shape-shifting T-1000 (Robert Patrick), a Terminator sent from the future to kill him. Another Terminator, the revamped T-800 (Arnold Schwarzenegger), has been sent back to protect the boy. As John and his mother (Linda Hamilton) go on the run with the T-800, the boy forms an unexpected bond with the robot."
  },
  {
    "year": 1994.0,
    "title": "The Lion King",
    "genre": "Adventure,Animation,Drama",
    "rating": 8.5,
    "description": "This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella)."
  },
  {
    "year": 1994.0,
    "title": "Pulp Fiction",
    "genre": "Crime,Drama",
    "rating": 8.9,
    "description": "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, \"Pumpkin\" (Tim Roth) and \"Honey Bunny\" (Amanda Plummer)."
  },
  {
    "year": 1994.0,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "rating": 9.3,
    "description": "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years."
  },
  {
    "year": 1997.0,
    "title": "Titanic",
    "genre": "Drama,Romance",
    "rating": 7.9,
    "description": "James Cameron's \"Titanic\" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the \"ship of dreams\" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
  },
  {
    "year": 2005.0,
    "title": "Corpse Bride",
    "genre": "Animation,Drama,Family",
    "rating": 7.3,
    "description": "Victor (Johnny Depp) and Victoria's (Emily Watson) families have arranged their marriage. Though they like each other, Victor is nervous about the ceremony. While he's in a forest practicing his lines for the wedding, a tree branch becomes a hand that drags him to the land of the dead. It belongs to Emily, who was murdered after eloping with her love and wants to marry Victor. Victor must get back aboveground before Victoria marries the villainous Barkis Bittern (Richard E. Grant)."
  },
  {
    "year": 2000.0,
    "title": "Gladiator",
    "genre": "Action,Adventure,Drama",
    "rating": 8.5,
    "description": "Commodus (Joaquin Phoenix) takes power and strips rank from Maximus (Russell Crowe), one of the favored generals of his predecessor and father, Emperor Marcus Aurelius, the great stoical philosopher. Maximus is then relegated to fighting to the death in the gladiator arenas."
  },
  {
    "year": 2001.0,
    "title": "A.I. Artificial Intelligence",
    "genre": "Drama,Sci-Fi",
    "rating": 7.2,
    "description": "A robotic boy, the first programmed to love, David (Haley Joel Osment) is adopted as a test case by a Cybertronics employee (Sam Robards) and his wife (Frances O'Connor). Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David. Without final acceptance by humans or machines, David embarks on a journey to discover where he truly belongs, uncovering a world in which the line between robot and machine is both vast and profoundly thin."
  },
  {
    "year": 2002.0,
    "title": "The Dummy",
    "genre": "Comedy,Drama,Romance",
    "rating": 6.6,
    "description": "A murderous ventriloquist dummy terrorizes newlyweds."
  },
  {
    "year": 2002.0,
    "title": "The Pianist",
    "genre": "Biography,Drama,Music",
    "rating": 8.5,
    "description": "The lives of two Canadian sisters (Gail Travers, Macha Grenon) are changed by their mutual first love for a Japanese pianist (Eiji Okuda)."
  },
  {
    "year": 2001.0,
    "title": "Chances Are",
    "genre": "Comedy,Romance",
    "rating": 8.6,
    "description": "A man's love for his pregnant wife, Corinne Jeffries (Cybill Shepherd), is interrupted when a car accident sends him to heaven. He is reincarnated, however, and two decades later he is a writer named Alex Finch (Robert Downey Jr.). But when Alex starts dating Miranda Jeffries (Mary Stuart Masterson) -- his all-grown-up daughter from his previous life -- he remembers his love for Corinne. This spells trouble for his past-life best friend, Philip Train (Ryan O'Neal), who is now pursuing Corinne."
  },
  {
    "year": 2004.0,
    "title": "The Incredibles",
    "genre": "Action,Adventure,Animation",
    "rating": 8.0,
    "description": "In this lauded Pixar animated film, married superheroes Mr. Incredible (Craig T. Nelson) and Elastigirl (Holly Hunter) are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble, and it's up to his family to save him."
  },
  {
    "year": 2009.0,
    "title": "Coraline",
    "genre": "Animation,Drama,Family",
    "rating": 7.7,
    "description": "While exploring her new home, a girl named Coraline (Dakota Fanning) discovers a secret door, behind which lies an alternate world that closely mirrors her own but, in many ways, is better. She rejoices in her discovery, until Other Mother (Teri Hatcher) and the rest of her parallel family try to keep her there forever. Coraline must use all her resources and bravery to make it back to her own family and life."
  },
  {
    "year": 2003.0,
    "title": "School of Rock",
    "genre": "Comedy,Music",
    "rating": 7.2,
    "description": "Overly enthusiastic guitarist Dewey Finn (Jack Black) gets thrown out of his bar band and finds himself in desperate need of work. Posing as a substitute music teacher at an elite private elementary school, he exposes his students to the hard rock gods he idolizes and emulates -- much to the consternation of the uptight principal (Joan Cusack). As he gets his privileged and precocious charges in touch with their inner rock 'n' roll animals, he imagines redemption at a local Battle of the Bands."
  },
  {
    "year": 2007.0,
    "title": "Lost in New Mexico: The Strange Tale of Susan Hero",
    "genre": "Drama,Romance,Sci-Fi",
    "rating": 7.1,
    "description": "A woman who's desperate to clone her dead child steals cash and travels across the country in search of a maverick animal-cloning expert who says he can help her."
  },
  {
    "year": 2004.0,
    "title": "Collateral",
    "genre": "Action,Crime,Drama",
    "rating": 7.5,
    "description": "A cab driver realizes his current fare is a hit man that has been having him drive around from mark to mark until the last witness to a crime is dead. When the cabbie finally figures out the truth, he must prevent the assassin from wiping out his last witness without becoming the next in the professional killer's line of casualties."
  },
  {
    "year": 2005.0,
    "title": "Anniyan",
    "genre": "Action,Crime,Drama",
    "rating": 8.3,
    "description": "Ramanujam, who suffers from multiple personality disorder, works as a lawyer by day and a vigilante at night. He uses tips from the 'Garuda Purana' as his tool to expose various antisocial elements."
  },
  {
    "year": 2005.0,
    "title": "Malfunkshun: The Andrew Wood Story",
    "genre": "Documentary,Music",
    "rating": 8.1,
    "description": "Experiencing the life of the fallen LoveChild, Andrew Wood from childhood to relationships and more."
  },
  {
    "year": 2005.0,
    "title": "The Island",
    "genre": "Action,Sci-Fi,Thriller",
    "rating": 6.8,
    "description": "In 2019 a mercenary (Djimon Hounsou) pursues two clones (Ewan McGregor, Scarlett Johansson) who escaped from a research facility after learning their true fate."
  },
  {
    "year": 2006.0,
    "title": "The Departed",
    "genre": "Crime,Drama,Thriller",
    "rating": 8.5,
    "description": "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster's trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other's identities to save their own lives."
  },
  {
    "year": 2005.0,
    "title": "Mrs. Henderson Presents",
    "genre": "Comedy,Drama,Music",
    "rating": 7.0,
    "description": "With some money in her pocket after the death of her husband, Mrs. Laura Henderson (Judi Dench) buys a theater and hires the irascible theater manager Vivian Van Damm (Bob Hoskins) to run the business, despite bad blood between the two. Henderson has a hit on her hands when she decides to add beautiful nude women to the stage shows at her Windmill Theatre. Though they are touched by tragedy, Henderson and her company bravely keep the theater active during the 1940-'41 Blitz of London."
  },
  {
    "year": 2005.0,
    "title": "Two Sons of Francisco",
    "genre": "Biography,Drama,Music",
    "rating": 6.9,
    "description": "A Brazilian farmer (\u00c2ngelo Ant\u00f4nio), who loves country music, pushes his offspring toward careers as musicians."
  },
  {
    "year": 2006.0,
    "title": "Brand Upon the Brain!",
    "genre": "Comedy,Drama,Fantasy",
    "rating": 7.3,
    "description": "Guy returns to his childhood home on an abandoned Canadian island to paint a lighthouse his parents used as an orphanage."
  },
  {
    "year": 2005.0,
    "title": "Hoodwinked",
    "genre": "Adventure,Animation,Comedy",
    "rating": 6.5,
    "description": "Bank robber Hank Tagert arrives home and learns an outlaw gang is planning to trick him into a dangerous stagecoach robbery."
  },
  {
    "year": 2017.0,
    "title": "Wonder Woman",
    "genre": "Action,Adventure,Fantasy",
    "rating": 7.4,
    "description": "The U.S. Intelligence Agency wants the Amazonian princess (Cathy Lee Crosby) to recover some vital documents."
  },
  {
    "year": 2006.0,
    "title": "Vettaiyaadu Vilaiyaadu",
    "genre": "Action,Crime,Drama",
    "rating": 7.9,
    "description": "A man is called upon to probe the murders of three members of the same family, one in India, and two in New York."
  },
  {
    "year": 2014.0,
    "title": "The Equalizer",
    "genre": "Action,Crime,Thriller",
    "rating": 7.2,
    "description": "Robert McCall (Denzel Washington), a man of mysterious origin who believes he has put the past behind him, dedicates himself to creating a quiet new life. However, when he meets Teri (Chlo\u00eb Grace Moretz), a teenager who has been manhandled by violent Russian mobsters, he simply cannot walk away. With his set of formidable skills, McCall comes out of self-imposed retirement and emerges as an avenging angel, ready to take down anyone who brutalizes the helpless."
  },
  {
    "year": 2006.0,
    "title": "Khosla Ka Ghosla!",
    "genre": "Comedy,Crime,Drama",
    "rating": 8.3,
    "description": "Members of a dysfunctional family unite when a corrupt man steals the plot of land upon which their retired patriarch hoped to build his dream house."
  },
  {
    "year": 2008.0,
    "title": "The Dark Knight",
    "genre": "Action,Crime,Drama",
    "rating": 9.0,
    "description": "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
  },
  {
    "year": 2013.0,
    "title": "Alan Partridge",
    "genre": "Action,Comedy,Crime",
    "rating": 6.9,
    "description": "Radio host Alan Partridge (Steve Coogan) gets a chance to boost his sagging career by serving as a liaison between police and his former co-host (Colm Meaney), who has taken hostages at their radio station."
  },
  {
    "year": 2006.0,
    "title": "Awesome; I Shot That!",
    "genre": "Documentary,Music",
    "rating": 7.5,
    "description": "On Oct. 9, 2004, music group the Beastie Boys perform a sold-out show at New York's Madison Square Garden. They distribute 50 cameras to be used during the performance, to members of the audience, thereby gaining many different perspectives on the energy and spectacle of one of their live concerts."
  },
  {
    "year": 2016.0,
    "title": "Silence",
    "genre": "Drama,History",
    "rating": 7.1,
    "description": "An autistic boy (Ian Geer Flanders) wanders away from his parents and befriends an old hermit (Will Geer) in the woods."
  },
  {
    "year": 2006.0,
    "title": "Inner Circle Line",
    "genre": "Drama",
    "rating": 7.8,
    "description": "With the help of a policeman, Isobel investigates her mother's death, believing foul play was involved."
  },
  {
    "year": 2006.0,
    "title": "Paper Dolls",
    "genre": "Documentary",
    "rating": 7.4,
    "description": "After Israel closes its borders to Palestinian workers, people from other countries emigrate there to find jobs. Among them are several individuals from the Philippines. The men, who consider themselves female, get jobs as caregivers for elderly Orthodox Jewish men. On their nights off they perform in a drag ensemble called \"Paper Dolls.\""
  },
  {
    "year": 2014.0,
    "title": "The Boxtrolls",
    "genre": "Adventure,Animation,Comedy",
    "rating": 6.8,
    "description": "Eggs (Isaac Hempstead-Wright), an orphan, lives with the Boxtrolls -- a community of quirky, mischievous creatures who inhabit a cavern beneath the city of Cheesebridge. When villainous Archibald Snatcher (Ben Kingsley) hatches a plan to get rid of the pretty harmless beings, Eggs decides to go above ground, where he meets and befriends feisty Winnifred (Elle Fanning). Together, Eggs and Winnifred devise a daring plan to save the Boxtrolls from extermination."
  },
  {
    "year": 2013.0,
    "title": "Dallas Buyers Club",
    "genre": "Biography,Drama",
    "rating": 7.9,
    "description": "In mid-1980s Texas, electrician Ron Woodroof (Matthew McConaughey) is stunned to learn that he has AIDS. Though told that he has just 30 days left to live, Woodroof refuses to give in to despair. He seeks out alternative therapies and smuggles unapproved drugs into the U.S. from wherever he can find them. Woodroof joins forces with a fellow AIDS patient (Jared Leto) and begins selling the treatments to the growing number of people who can't wait for the medical establishment to save them."
  },
  {
    "year": 2014.0,
    "title": "Interstellar",
    "genre": "Adventure,Drama,Sci-Fi",
    "rating": 8.7,
    "description": "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
  },
  {
    "year": 2009.0,
    "title": "The Last House on the Left",
    "genre": "Horror,Thriller",
    "rating": 6.5,
    "description": "Mari and her friend look forward to a holiday at the remote Collingwood lakehouse, but instead an escaped convict (Garret Dillahunt) and his crew kidnap them and later leave them for dead. Mari makes her way back home, where her parents, John (Tony Goldwyn) and Emma (Monica Potter), have unwittingly offered shelter to the thugs. When John and Emma find out what happened to their daughter, they decide to make the strangers rue the day they harmed Mari."
  },
  {
    "year": 2009.0,
    "title": "Precious",
    "genre": "Drama",
    "rating": 7.3,
    "description": "Pregnant by her own father for the second time, 16-year-old Claireece \"Precious\" Jones (Gabourey Sidibe) can neither read nor write and suffers constant abuse at the hands of her vicious mother (Mo'Nique). Precious instinctively sees a chance to turn her life around when she is offered the opportunity to transfer to an alternative school. Under the patient, firm guidance of her new teacher, Ms. Rain (Paula Patton), Precious begins the journey from oppression to self-determination."
  },
  {
    "year": 2012.0,
    "title": "The Amazing Spider-Man",
    "genre": "Action,Adventure,Sci-Fi",
    "rating": 6.9,
    "description": "Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father's, he pursues a quest to solve his parents' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors' alter ego, the Lizard."
  },
  {
    "year": 2019.0,
    "title": "Vellai Pookal",
    "genre": "Crime,Drama,Thriller",
    "rating": 7.1,
    "description": "A retired cop from India solves crimes while on vacation in the United States."
  },
  {
    "year": 2009.0,
    "title": "500 Days of Summer",
    "genre": "Comedy,Drama,Romance",
    "rating": 7.7,
    "description": "Tom (Joseph Gordon-Levitt), greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer (Zooey Deschanel), suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life."
  },
  {
    "year": 2007.0,
    "title": "Death Proof",
    "genre": "Action,Thriller",
    "rating": 7.0,
    "description": "Stuntman Mike (Kurt Russell) is a professional body double who likes to take unsuspecting women for deadly drives in his free time. He has doctored his car for maximum impact; when Mike purposely causes wrecks, the bodies pile up while he walks away with barely a scratch. The insane Mike may be in over his head, though, when he targets a tough group of female friends, including real-life stuntwoman Zoe Bell (who served as Uma Thurman's double in \"Kill Bill\"), who plays herself."
  },
  {
    "year": 2022.0,
    "title": "1946: The Mistranslation That Shifted Culture",
    "genre": "Documentary,History",
    "rating": 9.2,
    "description": "1946 is a feature documentary that follows the story of tireless researchers who trace the origins of the anti-gay movement among Christians to a grave mistranslation of the Bible in 1946. It chronicles the discovery of never-before-seen archives at Yale University which unveil astonishing new revelations, and casts significant doubt on any biblical basis for LGBTQIA+ prejudice. Featuring Commentary from prominent scholars as well as opposing pastors, including the personal stories of the film's creators, and original music by Grammy winning artist Mary Lambert, 1946 is at once challenging, enlightening, and inspiring."
  },
  {
    "year": 2020.0,
    "title": "One Night in Miami...",
    "genre": "Drama",
    "rating": 7.1,
    "description": "On one incredible night in 1964, four icons of sports, music, and activism gathered to celebrate one of the biggest upsets in boxing history. When underdog Cassius Clay, soon to be called Muhammad Ali, (Eli Goree), defeats heavy weight champion Sonny Liston at the Miami Convention Hall, Clay memorialized the event with three of his friends: Malcolm X (Kingsley Ben-Adir), Sam Cooke (Leslie Odom Jr.) and Jim Brown (Aldis Hodge)."
  },
  {
    "year": 2022.0,
    "title": "The Storied Life of A.J. Fikry",
    "genre": "Comedy,Drama",
    "rating": 6.6,
    "description": "Based on the New York Times best-selling novel, bookstore owner A.J. Fikry's (Kunal Nayyar) life is not turning out as he expected as he struggles both emotionally and financially. After his wife's tragic death, he feels lost and left behind in the rapidly evolving world of today. As he tries to keep his store afloat, he begins to drink his sorrows away ultimately hitting rock bottom when his most prized possession, a series of Edgar Allen Poe poems, are stolen. But when a mysterious package appears at the bookstore, the unexpected arrival gives Fikry a new lease on life, and love, that are greater than he ever imagined."
  },
  {
    "year": 2021.0,
    "title": "The Electrical Life of Louis Wain",
    "genre": "Biography,Drama,History",
    "rating": 6.8,
    "description": "The extraordinary true story of eccentric British artist Louis Wain (Benedict Cumberbatch), whose playful, sometimes even psychedelic pictures helped to transform the public's perception of cats forever. Moving from the late 1800s through to the 1930s, we follow the incredible adventures of this inspiring, unsung hero, as he seeks to unlock the \"electrical\" mysteries of the world and, in so doing, to better understand his own life and the profound love he shared with his wife Emily Richardson (Claire Foy)."
  },
  {
    "year": 2007.0,
    "title": "Planet Terror",
    "genre": "Action,Comedy,Horror",
    "rating": 7.1,
    "description": "An ordinary evening in a small Texas town becomes a grisly nightmare when a horde of flesh-eating zombies goes on the prowl. Cherry (Rose McGowan), a go-go dancer, and Wray (Freddy Rodriguez), her ex-lover, band together with other survivors in a no-holds barred effort to escape the carnage. The odds become a bit more even when Cherry, who lost her leg to a hungry ghoul, gets a machine-gun appendage and lets the bullets fly."
  },
  {
    "year": 2019.0,
    "title": "Cheer Up, Mr. Lee",
    "genre": "Comedy,Drama,Family",
    "rating": 6.9,
    "description": "Cheol Soo has the perfect appearance, but is a bit slow. One day, after having been sick and in hospital, his daughter, Saet Byeol, suddenly appears in front of him, and together they go on a trip."
  },
  {
    "year": 2010.0,
    "title": "The Hammer",
    "genre": "Biography,Drama,Sport",
    "rating": 6.9,
    "description": "Deaf wrestler Matt Hamill (Russell Harvard) overcomes numerous obstacles on the way to becoming a three-time NCAA champion and MMA fighter."
  },
  {
    "year": 2009.0,
    "title": "Bad Lieutenant: Port of Call New Orleans",
    "genre": "Crime,Drama",
    "rating": 6.6,
    "description": "Terence McDonagh (Nicolas Cage) isn't doing so well. He has a nasty painkiller addiction, courtesy of an injury he sustained while rescuing a prisoner during Hurricane Katrina. Plus, there's his alcoholic father (Tom Bower), boozy wife (Jennifer Coolidge) and prostitute girlfriend (Eva Mendes). And, he's just been saddled with a rookie partner (Shawn Hatosy). Now Terence must pull himself back from the edge of insanity to investigate a series of murders that has the city on edge."
  },
  {
    "year": 2022.0,
    "title": "Nope",
    "genre": "Horror,Mystery,Sci-Fi",
    "rating": 6.8,
    "description": "A man and his sister discover something sinister in the skies above their California horse ranch, while the owner of a nearby theme park tries to profit from the mysterious, otherworldly phenomenon."
  },
  {
    "year": 2009.0,
    "title": "The Athlete",
    "genre": "Biography,Drama",
    "rating": 6.6,
    "description": "After losing the use of his legs in a car accident, marathon runner Abebe Bikila (Rasselas Lakew) finds a new outlet for his athletic ability and competitive nature in archery and a type of sled-dog racing."
  },
  {
    "year": 2021.0,
    "title": "Summer of Soul (...Or, When the Revolution Could Not Be Televised)",
    "genre": "Documentary,Music",
    "rating": 8.0,
    "description": "In his acclaimed debut as a filmmaker, Ahmir \"Questlove\" Thompson presents a powerful and transporting documentary-part music film, part historical record created around an epic event that celebrated Black history, culture and fashion. Over the course of six weeks in the summer of 1969, just one hundred miles south of Woodstock, The Harlem Cultural Festival was filmed in Mount Morris Park (now Marcus Garvey Park). The footage was never seen and largely forgotten--until now. SUMMER OF SOUL shines a light on the importance of history to our spiritual well-being and stands as a testament to the healing power of music during times of unrest, both past and present. The feature includes never-before-seen concert performances by Stevie Wonder, Nina Simone, Sly & the Family Stone, Gladys Knight & the Pips, Ray Baretto, Abbey Lincoln & Max Roach and more."
  },
  {
    "year": 2008.0,
    "title": "Treeless Mountain",
    "genre": "Drama",
    "rating": 7.0,
    "description": "Jin (Kim Hee-yeon) and her younger sister, Bin (Song Hee Kim), are left by their mother (Soo Ah Lee) with Big Aunt (Kim Mi-Hyang). The girls' mother is trying to hunt down their father. She gives them a piggy bank, telling her daughters that when it is full of coins she will return. Big Aunt is an alcoholic who neglects to look after the children. By selling roasted grasshoppers, the two girls manage to take care of themselves over the summer, waiting all the while for their mother's return."
  },
  {
    "year": 2022.0,
    "title": "Jackass Forever",
    "genre": "Action,Comedy,Documentary",
    "rating": 6.8,
    "description": "Celebrating the joy of being back together with your best friends and a perfectly executed shot to the dingdong, the original jackass crew return for another round of hilarious, wildly absurd, and often dangerous displays of comedy with a little help from some exciting new cast."
  },
  {
    "year": 2022.0,
    "title": "Bonnie",
    "genre": "Documentary",
    "rating": 7.8,
    "description": "Hollywood stars pay homage to legendary casting director Bonnie Timmermann, who discovered Sean Penn, Brian Cox, and many others."
  },
  {
    "year": 2021.0,
    "title": "The Mad Women's Ball",
    "genre": "Drama,Thriller",
    "rating": 6.6,
    "description": "A committed woman and a tormented nurse prepare to attend a famous ball at a neurological clinic in the 19th century."
  },
  {
    "year": 2020.0,
    "title": "Wojnarowicz",
    "genre": "Documentary",
    "rating": 7.6,
    "description": "Filmmaker Chris McKim examines the life and work of artist, writer, photographer and AIDS activist David Wojnarowicz."
  },
  {
    "year": 2022.0,
    "title": "Prey",
    "genre": "Action,Adventure,Drama",
    "rating": 7.1,
    "description": null
  },
  {
    "year": 2021.0,
    "title": "Rurouni Kenshin: Final Chapter Part II - The Beginning",
    "genre": "Action,Adventure,Drama",
    "rating": 7.4,
    "description": null
  },
  {
    "year": 2011.0,
    "title": "Disneynature: Wings of Life",
    "genre": "Documentary,Family,News",
    "rating": 7.3,
    "description": "Filmmaker Louis Schwartzberg examines how the Earth's food chain depends on bees, hummingbirds, bats and other creatures."
  },
  {
    "year": 2020.0,
    "title": "The Things We Say, the Things We Do",
    "genre": "Comedy,Drama,Romance",
    "rating": 6.9,
    "description": "Emmie returns home after her mother dies and reconnects with her sister along the way."
  },
  {
    "year": 2011.0,
    "title": "The Cabin in the Woods",
    "genre": "Horror,Mystery,Thriller",
    "rating": 7.0,
    "description": "When five college friends (Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz, Jesse Williams) arrive at a remote forest cabin for a little vacation, little do they expect the horrors that await them. One by one, the youths fall victim to backwoods zombies, but there is another factor at play. Two scientists (Richard Jenkins, Bradley Whitford) are manipulating the ghoulish goings-on, but even as the body count rises, there is yet more at work than meets the eye."
  },
  {
    "year": 2011.0,
    "title": "X-Men: First Class",
    "genre": "Action,Sci-Fi",
    "rating": 7.7,
    "description": "In the early 1960s, during the height of the Cold War, a mutant named Charles Xavier (James McAvoy) meets a fellow mutant named Erik Lehnsherr (Michael Fassbender). Despite their vastly different backgrounds -- Charles grew up with a wealthy family, while Erik lost his parents at Auschwitz -- the two become close friends. As the world teeters on the brink of a nuclear war, Charles and Erik with other mutants join forces to save humanity. However, a situation soon tears the friends apart."
  },
  {
    "year": 2016.0,
    "title": "Ghostbusters",
    "genre": "Action,Comedy,Fantasy",
    "rating": 6.8,
    "description": "After the members of a team of scientists (Harold Ramis, Dan Aykroyd, Bill Murray) lose their cushy positions at a university in New York City, they decide to become \"ghostbusters\" to wage a high-tech battle with the supernatural for money. They stumble upon a gateway to another dimension, a doorway that will release evil upon the city. The Ghostbusters must now save New York from complete destruction."
  },
  {
    "year": 2013.0,
    "title": "Iron Man 3",
    "genre": "Action,Adventure,Sci-Fi",
    "rating": 7.1,
    "description": "Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves."
  },
  {
    "year": 2016.0,
    "title": "Angels in Exile",
    "genre": "Documentary",
    "rating": 7.0,
    "description": "Zulieka and Ariel grow up on the streets of Durham, South Africa."
  },
  {
    "year": 2023.0,
    "title": "Simon",
    "genre": "\\N",
    "rating": 9.4,
    "description": null
  }
];

let movies = moviesArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplayMovies(movies, 'a-z');
        });



function clearSearch() {
    document.getElementById('titleSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    sortAndDisplayMovies(movies, 'a-z');
}



function showDetails(movie) {
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('movieDetails');
    details.innerHTML = ` <button id="closeOverlay" onclick="closeOverlay()">Close</button>
			 <h2>${movie.title}</h2>
                         <p>Release Year: ${movie.year}</p>
                         <p>IMDB Rating: ${movie.rating}</p>
                         <p>Genre(s): ${movie.genre}</p>
                         <p>${movie.description}</p>`;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}


document.getElementById('sortOptions').addEventListener('change', function() {
	currentSortOption = this.value;
updateMovies();

});

function updateMovies() {
    const titleSearchValue = document.getElementById('titleSearch').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleSearchValue));
	currentSortOption = document.getElementById('sortOptions').value;
    sortAndDisplayMovies(filteredMovies, currentSortOption);
}


function sortAndDisplayMovies(moviesToSort, sortOption) {
    let sortedMovies = [...moviesToSort]; 

    switch (sortOption) {
        case 'newest':
            sortedMovies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
            break;
        case 'oldest':
            sortedMovies.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            break;
        case 'rating':
            sortedMovies.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case 'a-z':
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'z-a':
            sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    loadMovies(sortedMovies);
}
function sortMovies() {
    const sortValue = document.getElementById('sortOptions').value;
    let sortedMovies = [...movies]; 

console.log('Sorting movies by: ', sortValue);
console.log('Sorted movies: ', sortedMovies);
    switch (sortValue) {
        case 'newest':
            sortedMovies.sort((a, b) => b.year - a.year);
            break;
        case 'oldest':
            sortedMovies.sort((a, b) => a.year - b.year);
            break;
        case 'rating':
            sortedMovies.sort((a, b) => b.rating - a.rating);
            break;
        case 'a-z':
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'z-a':
            sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    loadMovies(sortedMovies);
}

function searchMovies() {
    const titleSearchValue = document.getElementById('titleSearch').value.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(titleSearchValue); 
    });
    loadMovies(filteredMovies);

}

document.getElementById('titleSearch').addEventListener('input', updateMovies);

function loadMovies(filteredmovies = movies) {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';
    filteredmovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movieItem';
        movieItem.innerHTML = `<img src="movies/${movie.title.replace(/:/g, '')}.jpg" alt="${movie.title}" style="width:100%"><h3>${movie.title}</h3>`;
        movieItem.onclick = () => showDetails(movie);
        grid.appendChild(movieItem);
    });
	document.getElementById('movieCount').textContent = `${filteredmovies.length} results`;
}
