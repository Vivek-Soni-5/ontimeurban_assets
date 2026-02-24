const category = [
    {
        id: 'grocery',
        name: 'Grocery',
        type: 'category',
        data: [
            {
                id: 'vegetables-fruits',
                name: 'Vegetables & Fruits',
                type: 'sub-category',
                data: [
                    {
                        id: 'fresh-vegetables',
                        name: 'Fresh Vegetables',
                        type: 'product'
                    },
                    {
                        id: 'fresh-fruits',
                        name: 'Fresh Fruits',
                        type: 'product'
                    },
                    {
                        id: 'exotic-fruits-vegetables',
                        name: 'Exotic Fruits & Vegetables',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'atta-besan-sooji',
                name: 'Atta, Besan & Sooji',
                type: 'sub-category',
                data: [
                    {
                        id: 'atta',
                        name: 'Atta',
                        type: 'product'
                    },
                    {
                        id: 'sooji-maida-daliya',
                        name: 'Sooji, Maida & Daliya',
                        type: 'product'
                    },
                    {
                        id: 'sattu-besan',
                        name: 'Sattu & Besan',
                        type: 'product'
                    },
                    {
                        id: 'millets-other-flours',
                        name: 'Millets & Other Flours',
                        type: 'product'
                    },
                    {
                        id: 'organic-flours',
                        name: 'Organic Flours'
                    }
                ]
            },
            {
                id: 'oils-ghee',
                name: 'Oils & Ghee',
                type: 'sub-category',
                data: [
                    {
                        id: 'ghee-vanaspati',
                        name: 'Ghee & Vanaspati',
                        type: 'product'
                    },
                    {
                        id: 'mustard-oil',
                        name: 'Mustard Oil',
                        type: 'product'
                    },
                    {
                        id: 'soyabean-sunflower-oil',
                        name: 'Soyabean & Sunflower Oil',
                        type: 'product'
                    },
                    {
                        id: 'rice-bran',
                        name: 'Rice Bran',
                        type: 'product'
                    },
                    {
                        id: 'groundnut-other-oils',
                        name: 'Groundnut & Other Oils',
                        type: 'product'
                    },
                    {
                        id: 'organic-edible-oil',
                        name: 'Organic Edible Oil',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'pulses',
                name: 'Pulses',
                type: 'sub-category',
                data: [
                    {
                        id: 'arhar-toor-dal',
                        name: 'Arhar & Toor Dal',
                        type: 'product'
                    },
                    {
                        id: 'masoor-moong-dal',
                        name: 'Masoor & Moong Dal',
                        type: 'product'
                    },
                    {
                        id: 'rajma-chola-matar',
                        name: 'Rajma, Chola & Matar',
                        type: 'product'
                    },
                    {
                        id: 'kala-chana-chana-dal',
                        name: 'Kala Chana & Chana Dal',
                        type: 'product'
                    },
                    {
                        id: 'other-pulses',
                        name: 'Other Pulses',
                        type: 'product'
                    },
                    {
                        id: 'organic-pulses',
                        name: 'Organic Pulses',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'cereals-rice',
                name: 'Cereals & Rice',
                type: 'sub-category',
                data: [
                    {
                        id: 'basmati-rice',
                        name: 'Basmati Rice',
                        type: 'product'
                    },
                    {
                        id: 'raw-boiled-rice',
                        name: 'Raw & Boiled Rice',
                        type: 'product'
                    },
                    {
                        id: 'sabudana-other-cereals',
                        name: 'Sabudana & Other Cereals',
                        type: 'product'
                    },
                    {
                        id: 'poha',
                        name: 'Poha',
                        type: 'product'
                    },
                    {
                        id: 'organic-rice-rice-products',
                        name: 'organic Rice & Rice Products',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'dry-fruits-nuts',
                name: 'Dry Fruits & Nuts',
                type: 'sub-category',
                data: [
                    {
                        id: 'almond-cashew',
                        name: 'Almond & Cashew',
                        type: 'product',
                    },
                    {
                        id: 'pista-akhrot',
                        name: 'Pista & Akhrot',
                        type: 'product'
                    },
                    {
                        id: 'dates-seeds',
                        name: 'Dates & Seeds',
                        type: 'product'
                    },
                    {
                        id: 'raisin',
                        name: 'Raisin',
                        type: 'product'
                    },
                    {
                        id: 'nuts-makhana',
                        name: 'Nuts & Makhana',
                        type: 'product'
                    },
                    {
                        id: 'others-dry-fruits',
                        name: 'Other Dry Fruits',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'salt-sugar-jaggery',
                name: 'Salt, Sugar & Jaggery',
                type: 'sub-category',
                data: [
                    {
                        id: 'salt',
                        name: 'Salt',
                        type: 'product'
                    },
                    {
                        id: 'sugar',
                        name: 'Sugar',
                        type: 'product'
                    },
                    {
                        id: 'jaggery',
                        name: 'Jaggery',
                        type: 'product'
                    },
                    {
                        id: 'other-sweetners',
                        name: 'Other Sweetners',
                        type: 'product'
                    },
                    {
                        id: 'organic-salt-sugar-jaggery',
                        name: 'Organic Salt, Sugar & Jaggery',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'masala-spices',
                name: 'Masala & Spices',
                type: 'sub-category',
                data: [
                    {
                        id: 'whole-spices',
                        name: 'Whole Spices',
                        type: 'product'
                    },
                    {
                        id: 'powdered-spices',
                        name: 'Powdered Spices',
                        type: 'product'
                    },
                    {
                        id: 'blended-spices',
                        name: 'Blended Spices',
                        type: 'product'
                    },
                    {
                        id: 'pickles-chutney',
                        name: 'Pickles & Chutney',
                        type: 'product'
                    },
                    {
                        id: 'cooking-paste',
                        name: 'Cooking Paste',
                        type: 'product'
                    },
                    {
                        id: 'papad-fryums',
                        name: 'Papad & Fryums',
                        type: 'product'
                    },
                    {
                        id: 'herbs-seasonings',
                        name: 'Herbs & Seasonings',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'pickles-papad',
                name: 'Pickles & Papad',
                type: 'sub-category',
                data: [
                    {
                        id: 'pickles-chutney',
                        name: 'Pickles & Chutney',
                        type: 'product'
                    },
                    {
                        id: 'cooking-paste',
                        name: 'Cooking Paste',
                        type: 'product'
                    },
                    {
                        id: 'papad-fryums',
                        name: 'Papad & fryums',
                        type: 'product'
                    }
                ]
            },
        ]
    },
    {
        id: 'dairy-breakfast',
        name: 'Dairy & Breakfast',
        type: 'category',
        data: [
            {
                id: 'milk-dairy',
                name: 'Milk & Dairy',
                type: 'sub-category',
                data: [
                    {
                        id: 'milk-curd',
                        name: 'Milk & Curd',
                        type: 'product'
                    },
                    {
                        id: 'paneer-cream',
                        name: 'Paneer & Cream',
                        type: 'product'
                    },
                    {
                        id: 'butter-cheese',
                        name: 'Butter & Cheese',
                        type: 'product'
                    },
                    {
                        id: 'lassi-milkshakes',
                        name: 'Lassi & Milkshakes',
                        type: 'product'
                    },
                    {
                        id: 'eggs-mushroom',
                        name: 'Eggs & Mushroom',
                        type: 'product'
                    },
                    {
                        id: 'other-milk-products',
                        name: 'Other Milk Products',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'breads-buns-more',
                name: 'Bread, Buns & More',
                type: 'sub-category',
                data: [
                    {
                        id: 'breads-buns',
                        name: 'Breads & Buns',
                        type: 'product'
                    },
                    {
                        id: 'cakes-cream-roll-pies',
                        name: 'Cakes, Cream Roll & Pies',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'breakfast-cereals',
                name: 'Breakfast & Cereals',
                type: 'sub-category',
                data: [
                    {
                        id: 'instant-breakfast',
                        name: 'Instant Breakfast',
                        type: 'product'
                    },
                    {
                        id: 'oats',
                        name: 'Oats',
                        type: 'product'
                    },
                    {
                        id: 'cornflakes-muesli',
                        name: 'Cornflakes & Muesli',
                        type: 'product'
                    },
                    {
                        id: 'rusk-khari-wafers',
                        name: 'Rusk, Khari & Wafers',
                        type: 'product'
                    },
                    {
                        id: 'baking-essentials',
                        name: 'Baking Essentials',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'jams-spreads',
                name: 'Jams & Spreads',
                type: 'sub-category',
                data: [
                    {
                        id: 'jams',
                        name: 'Jams',
                        type: 'product'
                    },
                    {
                        id: 'peanut-butter',
                        name: 'Peanut Butter',
                        type: 'product'
                    },
                    {
                        id: 'mayonnaise',
                        name: 'Mayonnaise',
                        type: 'product'
                    },
                    {
                        id: 'honey',
                        name: 'Honey',
                        type: 'product'
                    },
                    {
                        id: 'syrup-pre-mixes',
                        name: 'Syrup & Pre Mixes',
                        type: 'product'
                    }
                ]
            }
        ]
    },
    {
        id: 'snacks-drinks',
        name: 'Snacks & Drinks',
        type: 'category',
        data: [
            {
                id: 'chips-namkeen',
                name: 'Chips & Namkeen',
                type: 'sub-category',
                data: [
                    {
                        id: 'chips-nachos',
                        name: 'Chips & Nachos',
                        type: 'product'
                    },
                    {
                        id: 'bhujia-mixtures',
                        name: 'Bhujia & Mixtures',
                        type: 'product'
                    },
                    {
                        id: 'namkeen-snacks',
                        name: 'Namkeen Snacks',
                        type: 'product'
                    },
                    {
                        id: 'popcorn',
                        name: 'Popcorn',
                        type: 'product'
                    },
                    {
                        id: 'papad-fryums',
                        name: 'Papad & Fryums',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'biscuits-cookies',
                name: 'Biscuits & Cookies',
                type: 'sub-category',
                data: [
                    {
                        id: 'marie-digestive',
                        name: 'Marie & Digestive',
                        type: 'product'
                    },
                    {
                        id: 'cream-biscuits',
                        name: 'Cream Biscuits',
                        type: 'product'
                    },
                    {
                        id: 'cookies',
                        name: 'Cookies',
                        type: 'product'
                    },
                    {
                        id: 'glucose-milk-biscuits',
                        name: 'Glucose & Milk Biscuits',
                        type: 'product'
                    },
                    {
                        id: 'sweet-salty-biscuits',
                        name: 'Sweet & Salty Biscuits',
                        type: 'product'
                    },
                    {
                        id: 'rusk-khari-wafers',
                        name: 'Rusk, Khari & Wafers',
                        type: 'product'
                    },
                    {
                        id: 'cakes-cream-roll-pies',
                        name: 'Cakes, Cream Roll & Pies',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'noodles-instant-food',
                name: 'Noodles & Instant Food',
                type: 'sub-category',
                data: [
                    {
                        id: 'noodles',
                        name: 'Noodles',
                        type: 'product'
                    },
                    {
                        id: 'pasta',
                        name: 'Pasta',
                        type: 'product'
                    },
                    {
                        id: 'vermicelli',
                        name: 'Vermicelli',
                        type: 'product'
                    },
                    {
                        id: 'soup',
                        name: 'Soup',
                        type: 'product'
                    },
                    {
                        id: 'instant-mix',
                        name: 'Instant Mix',
                        type: 'product'
                    },
                    {
                        id: 'ready-to-eat',
                        name: 'Ready to Eat',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'sauces-dips',
                name: 'Sauces & Dips',
                type: 'sub-category',
                data: [
                    {
                        id: 'tomato-ketchup',
                        name: 'Tomato Ketchup',
                        type: 'product'
                    },
                    {
                        id: 'mayonnaise',
                        name: 'Mayonnaise',
                        type: 'product'
                    },
                    {
                        id: 'peanut-butter',
                        name: 'Peanut Butter',
                        type: 'product'
                    },
                    {
                        id: 'syrup-pre-mixes',
                        name: 'Syrup & Pre Mixes',
                        type: 'product'
                    },
                    {
                        id: 'chinese-sauces',
                        name: 'Chinese Sauces',
                        type: 'product'
                    },
                    {
                        id: 'pickles-chutney',
                        name: 'Pickles & Chutney',
                        type: 'product'
                    },
                    {
                        id: 'dips-salad-dressings',
                        name: 'Dips & Salad Dressings',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'chocolates-sweets',
                name: 'Chocolates & Sweets',
                type: 'sub-category',
                data: [
                    {
                        id: 'chocolate',
                        name: 'Chocolate',
                        type: 'product'
                    },
                    {
                        id: 'cakes-pies',
                        name: 'Cakes & Pies',
                        type: 'product'
                    },
                    {
                        id: 'indian-mithai',
                        name: 'Indian Mithai',
                        type: 'product'
                    },
                    {
                        id: 'dessert-mixes',
                        name: 'Dessert Mixes',
                        type: 'product'
                    },
                    {
                        id: 'candies-gums',
                        name: 'Candies & Gums',
                        type: 'product'
                    },
                    {
                        id: 'mint-mouth-freshners',
                        name: 'Mint & Mouth Freshners',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'drinks-juices',
                name: 'Drinks & Juices',
                type: 'sub-category',
                data: [
                    {
                        id: 'cold-drinks',
                        name: 'Cold Drinks',
                        type: 'product'
                    },
                    {
                        id: 'fruit-juices',
                        name: 'Fruits Juices',
                        type: 'product'
                    },
                    {
                        id: 'energy-drinks',
                        name: 'Energy Drinks',
                        type: 'product'
                    },
                    {
                        id: 'water-soda',
                        name: 'Water & Soda',
                        type: 'product'
                    },
                    {
                        id: 'syrup-pre-mixes',
                        name: 'Syrup & Pre Mixes',
                        type: 'product'
                    },
                    {
                        id: 'lassi-buttermilk-milkshakes',
                        name: 'Lassi, Buttermilk & Milkshakes',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'tea-coffee-milk-drinks',
                name: 'Tea, Coffee & Milk Drinks',
                type: 'sub-category',
                data: [
                    {
                        id: 'leaf-dust-tea',
                        name: 'Leaf & Dust Tea',
                        type: 'product'
                    },
                    {
                        id: 'coffee',
                        name: 'Coffee',
                        type: 'product'
                    },
                    {
                        id: 'milk-health-drinks',
                        name: 'Milk & Health Drinks',
                        type: 'product'
                    },
                    {
                        id: 'green-flavoured-tea',
                        name: 'Green & Flavoured Tea',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'ice-creams-frozen-food',
                name: 'Ice Creams & Frozen Food',
                type: 'sub-category',
                data: [
                    {
                        id: 'frozen-foods',
                        name: 'Frozen Foods',
                        type: 'product'
                    },
                    {
                        id: 'tubs',
                        name: 'Tubs',
                        type: 'product'
                    },
                    {
                        id: 'sticks',
                        name: 'Sticks',
                        type: 'product'
                    },
                    {
                        id: 'cones',
                        name: 'Cones',
                        type: 'product'
                    },
                    {
                        id: 'cassata-sandwich',
                        name: 'Cassata & Sandwich',
                        type: 'product'
                    },
                    {
                        id: 'single-serve-cups',
                        name: 'Single Serve Cups',
                        type: 'product'
                    },
                    {
                        id: 'cakes-others',
                        name: 'Cakes & Others',
                        type: 'product'
                    },
                ]
            }
        ]
    },
    {
        id: 'beauty-personal-care',
        name: 'Beauty & Personal Care',
        type: 'category',
        data: [
            {
                id: 'soaps-body-washes',
                name: 'Soaps & Body Washes',
                type: 'sub-category',
                data: [
                    {
                        id: 'soaps',
                        name: 'Soaps',
                        type: 'product'
                    },
                    {
                        id: 'shower-gel',
                        name: 'Shower Gel',
                        type: 'product'
                    },
                    {
                        id: 'face-wash-cleanser',
                        name: 'Face Wash & Cleanser',
                        type: 'product'
                    },
                    {
                        id: 'scrub-exfoliators',
                        name: 'Scrub & Exfoliators',
                        type: 'product'
                    },
                    {
                        id: 'handwash-sanitisers',
                        name: 'Handwash & Sanitisers',
                        type: 'product'
                    },
                    {
                        id: 'bathing-accessories',
                        name: 'Bathing Accessories',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'skin-face-care',
                name: 'Skin & Face Care',
                type: 'sub-category',
                data: [
                    {
                        id: 'face-wash-cleanser',
                        name: 'Face Wash & Cleanser',
                        type: 'product'
                    },
                    {
                        id: 'scrub-exfoliators',
                        name: 'Scrub & Exfoliators',
                        type: 'product'
                    },
                    {
                        id: 'face-cream-toner-rose-water',
                        name: 'Face Cream, Toner & Rose Water',
                        type: 'product'
                    },
                    {
                        id: 'body-oil-lotion-moisturizer',
                        name: 'Body Oil, Lotion & Moisturizer',
                        type: 'product'
                    },
                    {
                        id: 'mens-grooming',
                        name: "Men's Grooming",
                        type: 'product'
                    },
                    {
                        id: 'facial-kit-mask-wipes',
                        name: 'Facial Kit, Mask & Wipes',
                        type: 'product'
                    },
                    {
                        id: 'lip-care',
                        name: 'Lip Care',
                        type: 'product'
                    },
                    {
                        id: 'sunscreen',
                        name: 'Sunscreen',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'hair-care',
                name: 'Hair Care',
                type: 'sub-category',
                data: [
                    {
                        id: 'shampoo',
                        name: 'Shampoo',
                        type: 'product'
                    },
                    {
                        id: 'hair-oil-serum',
                        name: 'Hair Oil & Serum',
                        type: 'product'
                    },
                    {
                        id: 'hair-colour-mehendi',
                        name: 'Hair Colour & Mehendi',
                        type: 'product'
                    },
                    {
                        id: 'conditioner',
                        name: 'Conditioner',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'dental-care',
                name: 'Dental Care',
                type: 'sub-category',
                data: [
                    {
                        id: 'toothpaste',
                        name: 'Tooth Paste',
                        type: 'product'
                    },
                    {
                        id: 'toothbrush',
                        name: 'Tooth Brush',
                        type: 'product'
                    },
                    {
                        id: 'mouthwash-oral-accessories',
                        name: 'Mouth Wash & Oral Accessories',
                        type: 'product'
                    },
                    {
                        id: 'kids-oral-care',
                        name: 'Kids Oral Care',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'perfumes-talcum',
                name: 'Perfumes & Talcum Powders',
                type: 'sub-category',
                data: [
                    {
                        id: 'deodorants',
                        name: 'Deodorants',
                        type: 'product'
                    },
                    {
                        id: 'perfumes',
                        name: 'Perfumes',
                        type: 'product'
                    },
                    {
                        id: 'roll-on',
                        name: 'Roll On',
                        type: 'product'
                    },
                    {
                        id: 'talcum-powder',
                        name: 'Talcum Powder',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'health-wellness',
                name: 'Health & Wellness',
                type: 'sub-category',
                data: [
                    {
                        id: 'wound-care',
                        name: 'Wound Care',
                        type: 'product'
                    },
                    {
                        id: 'health-ayurveda',
                        name: 'Health Ayurveda',
                        type: 'product'
                    },
                    {
                        id: 'health-essentials',
                        name: 'Health Essentials',
                        type: 'product'
                    },
                    {
                        id: 'pain-relief',
                        name: 'Pain Relief',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'baby-care',
                name: 'Baby Care',
                type: 'sub-category',
                data: [
                    {
                        id: 'baby-food',
                        name: 'Baby Food',
                        type: 'product'
                    },
                    {
                        id: 'baby-shampoo-soaps',
                        name: 'Shampoo & Soaps',
                        type: 'product'
                    },
                    {
                        id: 'diapers-wipes',
                        name: 'Diapers & Wipes',
                        type: 'product'
                    },
                    {
                        id: 'baby-oil-cream-powder',
                        name: 'Oil, Cream & Powder',
                        type: 'product'
                    },
                    {
                        id: 'baby-health-tooth-care',
                        name: 'Baby Health & Tooth Care',
                        type: 'product'
                    },
                    {
                        id: 'baby-accessories',
                        name: 'Baby Accessories',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'feminine-hygiene',
                name: 'Feminine Hygiene',
                type: 'sub-category',
                data: [
                    {
                        id: 'sanitary-pad',
                        name: 'Sanitary Pad',
                        type: 'product'
                    },
                    {
                        id: 'hair-removal',
                        name: 'Hair Removal',
                        type: 'product'
                    }
                ]
            }
        ]
    },
    {
        id: 'household-essentials',
        name: 'Household Essentials',
        type: 'category',
        data: [
            {
                id: 'cleaning-essentials',
                name: 'Cleaning Essentials',
                type: 'sub-category',
                data: [
                    {
                        id: 'repellents-disinfection',
                        name: 'Repellents & Disinfections',
                        type: 'product'
                    },
                    {
                        id: 'glass-metal-cleaners',
                        name: 'Glass, Metal Cleaners',
                        type: 'product'
                    },
                    {
                        id: 'detergent-powder-bars',
                        name: 'Detergent Powder & Bars',
                        type: 'product'
                    },
                    {
                        id: 'toilet-floor-cleaners',
                        name: 'Toilet & Floor Cleaners',
                        type: 'product'
                    },
                    {
                        id: 'cleaning-tools',
                        name: 'Cleaning Tools',
                        type: 'product'
                    },
                    {
                        id: 'dishwash-bars',
                        name: 'Dishwash & Bars',
                        type: 'product'
                    },
                    {
                        id: 'liquid-detergents',
                        name: 'Liquid Detergents',
                        type: 'product'
                    },
                    {
                        id: 'shoe-care',
                        name: 'Shoe Care',
                        type: 'product'
                    },
                    {
                        id: 'fresheners',
                        name: 'Fresheners',
                        type: 'product'
                    },
                    {
                        id: 'machine-car-care',
                        name: 'Machine & Car Care',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'home-lifestyles',
                name: 'Home & Lifestyles',
                type: 'sub-category',
                data: [
                    {
                        id: 'home-decor',
                        name: 'Home Decor',
                        type: 'product'
                    },
                    {
                        id: 'plants-bouquets',
                        name: 'Plants & Bouquets',
                        type: 'product'
                    },
                    {
                        id: 'bedsheets-towels',
                        name: 'Bedsheets & Towels',
                        type: 'product'
                    },
                    {
                        id: 'gardening',
                        name: 'Gardening',
                        type: 'product'
                    },
                    {
                        id: 'decorative-lights',
                        name: 'Decorative Lights',
                        type: 'product'
                    },
                    {
                        id: 'home-needs',
                        name: 'Home Needs',
                        type: 'product'
                    },
                    {
                        id: 'tissues-disposables',
                        name: 'Tissues & Disposables',
                        type: 'product'
                    },
                    {
                        id: 'jewellery',
                        name: 'Jewellery',
                        type: 'product'
                    },
                    {
                        id: 'innerwear',
                        name: 'Innerwear',
                        type: 'product'
                    },
                    {
                        id: 'lifestyle-accessories',
                        name: 'Lifestyle Accessories',
                        type: 'product'
                    },
                    {
                        id: 'party-festive-needs',
                        name: 'Party & Festive Needs',
                        type: 'product'
                    },
                    {
                        id: 'socks-handkerchiefs',
                        name: 'Socks & Handkerchiefs',
                        type: 'product'
                    },
                    {
                        id: 'fresheners-home',
                        name: 'Fresheners',
                        type: 'product'
                    },
                    {
                        id: 'pooja-needs',
                        name: 'Pooja Needs',
                        type: 'product'
                    },
                    {
                        id: 'bathroom-essentials',
                        name: 'Bathroom Essentials',
                        type: 'product'
                    },
                    {
                        id: 'bags',
                        name: 'Bags',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'electronics',
                name: 'Electronics',
                type: 'sub-category',
                data: [
                    {
                        id: 'trimmers-hair-appliances',
                        name: 'Trimmers & Hair Appliances',
                        type: 'product'
                    },
                    {
                        id: 'earphones-headsets',
                        name: 'Earphones & Headsets',
                        type: 'product'
                    },
                    {
                        id: 'speakers',
                        name: 'Speakers',
                        type: 'product'
                    },
                    {
                        id: 'mobile-computer',
                        name: 'Mobile & Computer',
                        type: 'product'
                    },
                    {
                        id: 'decorative-lights-electronics',
                        name: 'Decorative Lights',
                        type: 'product'
                    },
                    {
                        id: 'chargers-cables',
                        name: 'Chargers & Cables',
                        type: 'product'
                    },
                    {
                        id: 'smart-watches',
                        name: 'Smart Watches',
                        type: 'product'
                    },
                    {
                        id: 'kitchen-appliances',
                        name: 'Kitchen Appliances',
                        type: 'product'
                    },
                    {
                        id: 'batteries',
                        name: 'Batteries',
                        type: 'product'
                    },
                    {
                        id: 'extension-cables-accessories',
                        name: 'Extension Cables & Accessories',
                        type: 'product'
                    },
                    {
                        id: 'home-appliances',
                        name: 'Home Appliances',
                        type: 'product'
                    },
                    {
                        id: 'music-instruments-accessories',
                        name: 'Music Instruments & Accessories',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'stationary-games',
                name: 'Stationary & Games',
                type: 'sub-category',
                data: [
                    {
                        id: 'notebooks-diaries',
                        name: 'Notebooks & Diaries',
                        type: 'product'
                    },
                    {
                        id: 'pens-pencils',
                        name: 'Pens & Pencils',
                        type: 'product'
                    },
                    {
                        id: 'toys-games',
                        name: 'Toys & Games',
                        type: 'product'
                    },
                    {
                        id: 'glue-tape',
                        name: 'Glue & Tape',
                        type: 'product'
                    },
                    {
                        id: 'books-magazines',
                        name: 'Books & Magazines',
                        type: 'product'
                    },
                    {
                        id: 'school-needs',
                        name: 'School Needs',
                        type: 'product'
                    },
                    {
                        id: 'childrens-book',
                        name: "Children's Book",
                        type: 'product'
                    },
                    {
                        id: 'art-crafts',
                        name: 'Art & Crafts',
                        type: 'product'
                    },
                    {
                        id: 'files-office-needs',
                        name: 'Files & Office Needs',
                        type: 'product'
                    },
                    {
                        id: 'gift-wraps-bags',
                        name: 'Gift Wraps & Bags',
                        type: 'product'
                    },
                    {
                        id: 'sports-gym',
                        name: 'Sports & Gym',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'kitchen-dining',
                name: 'Kitchen & Dining',
                type: 'sub-category',
                data: [
                    {
                        id: 'pressure-cooker',
                        name: 'Pressure Cooker',
                        type: 'product'
                    },
                    {
                        id: 'cookware-set',
                        name: 'Cookware Set',
                        type: 'product'
                    },
                    {
                        id: 'bottles-flask',
                        name: 'Bottles & Flask',
                        type: 'product'
                    },
                    {
                        id: 'gas-stove-accessories',
                        name: 'Gas Stove & Accessories',
                        type: 'product'
                    },
                    {
                        id: 'kitchen-aids',
                        name: 'Kitchen Aids',
                        type: 'product'
                    },
                    {
                        id: 'kitchen-storage',
                        name: 'Kitchen Storage',
                        type: 'product'
                    },
                    {
                        id: 'tableware-more',
                        name: 'Tableware & More',
                        type: 'product'
                    },
                    {
                        id: 'steel-utensils',
                        name: 'Steel Utensils',
                        type: 'product'
                    },
                    {
                        id: 'lunch-boxes',
                        name: 'Lunch Boxes',
                        type: 'product'
                    },
                    {
                        id: 'kitchen-tools',
                        name: 'Kitchen Tools',
                        type: 'product'
                    },
                    {
                        id: 'drinkware-bar',
                        name: 'Drinkware & Bar',
                        type: 'product'
                    }
                ]
            },
            {
                id: 'pet-care',
                name: 'Pet Care',
                type: 'sub-category',
                data: [
                    {
                        id: 'cat-food',
                        name: 'Cat Food',
                        type: 'product'
                    },
                    {
                        id: 'dog-food',
                        name: 'Dog Food',
                        type: 'product'
                    },
                    {
                        id: 'pet-treat-toys',
                        name: 'Pet Treat & Toys',
                        type: 'product'
                    },
                    {
                        id: 'pet-grooming',
                        name: 'Pet Groomings',
                        type: 'product'
                    }
                ]
            }

        ]
    }


]