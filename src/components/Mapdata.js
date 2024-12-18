const MapData = [
    { name: "Colombo", description: "The capital city of Sri Lanka.", coordinates: [6.9271, 79.8612] },
  { name: "Kandy", description: "Known for the Temple of the Tooth.", coordinates: [7.2906, 80.6337] },
  { name: "Sigiriya", description: "An ancient rock fortress and UNESCO site.", coordinates: [7.9503, 80.3834] },
  { name: "Nuwara Eliya", description: "A cool hill station famous for tea plantations.", coordinates: [6.9480, 80.7909] },
  { name: "Galle", description: "A historic city with colonial buildings.", coordinates: [6.0327, 80.2197] },
  { name: "Ella", description: "Known for hiking and stunning views.", coordinates: [6.8660, 81.0350] },
  { name: "Mirissa", description: "A popular beach for whale watching.", coordinates: [5.9475, 80.4797] },
  { name: "Anuradhapura", description: "An ancient city with sacred Buddhist sites.", coordinates: [8.3140, 80.4037] },
  { name: "Polonnaruwa", description: "A medieval capital with historical ruins.", coordinates: [7.9400, 81.0170] },
  { name: "Yala National Park", description: "A wildlife park known for leopards and elephants.", coordinates: [6.3720, 81.5137] },
  { name: "Dambulla Cave Temple", description: "A Buddhist temple with ancient murals.", coordinates: [7.8610, 80.6477] },
  { name: "Horton Plains National Park", description: "Known for its biodiversity and World's End.", coordinates: [6.8130, 80.9820] },
  { name: "Trincomalee", description: "A coastal city with beautiful beaches.", coordinates: [8.5744, 81.2279] },
  { name: "Bentota", description: "Famous for beaches and water sports.", coordinates: [6.4210, 79.9684] },
  { name: "Kalkudah Beach", description: "A beautiful beach on the eastern coast.", coordinates: [7.7343, 81.5141] },
  { name: "Arugam Bay", description: "A popular beach for surfing.", coordinates: [6.8779, 81.8266] },
  { name: "Adam's Peak", description: "A sacred mountain for many religions.", coordinates: [6.7030, 80.3875] },
  { name: "Kalpitiya", description: "Known for whale watching and kite surfing.", coordinates: [8.0141, 79.9750] },
  { name: "Hikkaduwa", description: "A beach destination with coral reefs.", coordinates: [6.1012, 80.2234] },
  { name: "Uda Walawe National Park", description: "A wildlife sanctuary, home to elephants.", coordinates: [6.5269, 80.9840] },
  { name: "Weligama", description: "A fishing town known for its beaches.", coordinates: [5.9819, 80.4325] },
  { name: "Sri Pada (Adam's Peak)", description: "A sacred mountain pilgrimage site.", coordinates: [6.7030, 80.3875] },
  { name: "Cinnamon Gardens", description: "A leafy residential area in Colombo.", coordinates: [6.9319, 79.9753] },
  { name: "The Royal Botanical Gardens", description: "A large garden in Peradeniya near Kandy.", coordinates: [7.2670, 80.6212] },
  { name: "Kithulgala", description: "A town known for white-water rafting.", coordinates: [6.9050, 80.3700] },
  { name: "Galle Fort", description: "A historic fort built by the Portuguese.", coordinates: [6.0327, 80.2197] },
  { name: "Ambalangoda", description: "A town known for mask making and beaches.", coordinates: [6.2163, 80.0802] },
  { name: "Pinnawala Elephant Orphanage", description: "A sanctuary for orphaned elephants.", coordinates: [7.3240, 80.3815] },
  { name: "Matara", description: "A city with historical significance and beaches.", coordinates: [5.9500, 80.5475] },
  { name: "Ritigala", description: "An ancient Buddhist monastery and nature reserve.", coordinates: [8.3143, 80.7942] },
  { name: "Sinharaja Forest Reserve", description: "A UNESCO-listed rainforest with biodiversity.", coordinates: [6.3686, 80.4661] },
  { name: "Knuckles Mountain Range", description: "A range of mountains with stunning views.", coordinates: [7.4075, 80.7603] },
  { name: "Lunuganga", description: "A historic garden and country estate in Bentota.", coordinates: [6.4166, 79.9931] },
  { name: "Badulla", description: "Known for its tea plantations and scenic views.", coordinates: [6.9861, 81.0536] },
  { name: "Tissa", description: "A town near Yala National Park.", coordinates: [6.3490, 81.2781] },
  { name: "Pothupitiya", description: "A rural village with picturesque scenery.", coordinates: [6.6725, 79.9813] },
  { name: "Haputale", description: "A town in the central hills with tea plantations.", coordinates: [6.7760, 80.9480] },
  { name: "Bopath Ella", description: "A stunning waterfall in the Ratnapura district.", coordinates: [6.4644, 80.3696] },
  { name: "Hummanaya Blowhole", description: "A natural sea geyser located in the south.", coordinates: [5.9692, 80.4647] },
  { name: "Kandy Lake", description: "A scenic lake located in the center of Kandy.", coordinates: [7.2916, 80.6337] },
  { name: "Negombo", description: "A coastal city near Colombo known for beaches.", coordinates: [7.2089, 79.9720] },
  { name: "Vavuniya", description: "A city in the Northern Province with cultural heritage.", coordinates: [8.7413, 80.5153] },
  { name: "Jaffna", description: "A city known for its history and Hindu temples.", coordinates: [9.6615, 80.0221] },
  { name: "Dondra Head", description: "The southernmost point of Sri Lanka, known for Dondra Lighthouse.", coordinates: [5.9319, 80.5439] },
  { name: "Wilpattu National Park", description: "A large national park known for wildlife safaris.", coordinates: [8.3547, 80.0208] },
  { name: "Nallur Kandaswamy Kovil", description: "A famous Hindu temple in Jaffna.", coordinates: [9.6611, 80.0225] },
  { name: "Kandy Garrison Cemetery", description: "A historic cemetery in Kandy, dating back to the British colonial era.", coordinates: [7.2921, 80.6327] },
  { name: "Kalutara", description: "A city with famous beaches and temples.", coordinates: [6.5787, 79.9771] },
  { name: "Batticaloa", description: "A city known for its lagoons and colonial history.", coordinates: [7.7130, 81.7014] },
  { name: "Habarana", description: "A popular tourist town near Sigiriya and Dambulla.", coordinates: [8.3321, 80.9836] },
  { name: "Pidurangala Rock", description: "A rock formation with views of Sigiriya and the surrounding area.", coordinates: [7.9514, 80.3825] },
  { name: "Dambulla", description: "A town known for the Dambulla Cave Temple.", coordinates: [7.8610, 80.6477] } 
]

export default MapData;
