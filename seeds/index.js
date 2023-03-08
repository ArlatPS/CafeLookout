import express from "express";
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import { Cafe } from '.././models/cafe.js'
import { descriptors, places } from './seedDesc.js'
import { cities } from './cities.js'

import { imgs } from "./imgs.js";

mongoose.connect('mongodb+srv://Arlat:6CrSHMM0B9VDyM2O@cafelookout.4eqxgyh.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console), "connection error");
db.once("open", () => { console.log("CONNECTED WITH DB") })

const pick = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Cafe.deleteMany({});
    for (let i = 0; i < 240; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const priceLen = Math.floor(Math.random() * 5) + 1
        let price = "";
        for (let i = 1; i<=priceLen;i++){
          price += "$"
        }
        let currentDate = new Date().toJSON();
        const cafe = new Cafe({
            title: `${pick(descriptors)} ${pick(places)}`,
            author: '639b1f0c3cdc6e074bddb4d1',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Officia placeat vel iusto cumque qui! Molestias eos est fugiat, ratione, aperiam quas illo nisi unde ad beatae natus, \
            in similique nihil Corrupti voluptas alias dignissimos porro accusantium impedit.Repellendus ipsum neque minus repellat nisi, \
            atque voluptatibus distinctio!",
            price: price,
            images: [ {url: pick(imgs), filename: "empty"}, {url: pick(imgs), filename: "empty"} ],
            geometry: { type: 'Point', coordinates: [ cities[random1000].longitude, cities[random1000].latitude] },
            created: currentDate,
        })
        await cafe.save()
    }
}

seedDB()
    .then(() => mongoose.connection.close());