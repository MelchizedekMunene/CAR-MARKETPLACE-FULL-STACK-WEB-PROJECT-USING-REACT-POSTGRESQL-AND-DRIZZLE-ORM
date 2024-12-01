import { json, pgTable } from "drizzle-orm/pg-core";
import { serial, varchar, text, integer} from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle', { length: 255 }).notNull(),
    tagline: varchar('tagline', { length: 255 }),
    originalPrice: varchar('originalPrice', { length: 50 }),
    sellingPrice: varchar('sellingPrice', { length: 50 }).notNull(),
    category: varchar('category', { length: 50 }).notNull(),
    condition: varchar('condition', { length: 50 }).notNull(),
    make: varchar('make', { length: 100 }).notNull(),
    model: varchar('model', { length: 100 }).notNull(),
    year: integer('year').notNull(),
    driveType: varchar('driveType', { length: 50 }).notNull(),
    transmission: varchar('transmission', { length: 50 }).notNull(),
    fuelType: varchar('fuelType', { length: 50 }).notNull(),
    mileage: integer('mileage').notNull(),
    engineSize: varchar('engineSize', { length: 50 }),
    cylinder: integer('cylinder'),
    color: varchar('color', { length: 50 }).notNull(),
    door: integer('door').notNull(),
    vin: varchar('vin', { length: 50 }),
    offerType: varchar('offerType', { length: 50 }),
    listingDescription: text('listingDescription').notNull(),
    features: json('features')
})