const categoryDepth = [
    {
        id: "grocery",
        name: "Grocery",
        type: "category",
        data: [

            // =========================
            // VEGETABLES & FRUITS
            // =========================
            {
                id: "vegetables-fruits",
                name: "Vegetables & Fruits",
                type: "sub-category",
                data: [
                    {
                        id: "fresh-vegetables",
                        name: "Fresh Vegetables",
                        type: "product-group",
                        data: [
                            { id: "potato", name: "Potato", type: "product-type" },
                            { id: "onion", name: "Onion", type: "product-type" },
                            { id: "tomato", name: "Tomato", type: "product-type" },
                            { id: "leafy-vegetables", name: "Leafy Vegetables", type: "product-type" },
                            { id: "root-vegetables", name: "Root Vegetables", type: "product-type" },
                            { id: "gourds", name: "Gourds", type: "product-type" },
                            { id: "beans-peas", name: "Beans & Peas", type: "product-type" },
                            { id: "cabbage-cauliflower", name: "Cabbage & Cauliflower", type: "product-type" },
                            { id: "exotic-vegetables", name: "Exotic Vegetables", type: "product-type" }
                        ]
                    },
                    {
                        id: "fresh-fruits",
                        name: "Fresh Fruits",
                        type: "product-group",
                        data: [
                            { id: "banana", name: "Banana", type: "product-type" },
                            { id: "apple", name: "Apple", type: "product-type" },
                            { id: "mango", name: "Mango", type: "product-type" },
                            { id: "citrus-fruits", name: "Citrus Fruits", type: "product-type" },
                            { id: "grapes", name: "Grapes", type: "product-type" },
                            { id: "pomegranate", name: "Pomegranate", type: "product-type" },
                            { id: "seasonal-fruits", name: "Seasonal Fruits", type: "product-type" },
                            { id: "cut-fruits", name: "Cut Fruits", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // ATTA BESAN SOOJI
            // =========================
            {
                id: "atta-besan-sooji",
                name: "Atta, Besan & Sooji",
                type: "sub-category",
                data: [
                    {
                        id: "atta",
                        name: "Atta",
                        type: "product-group",
                        data: [
                            { id: "whole-wheat-atta", name: "Whole Wheat Atta", type: "product-type" },
                            { id: "multigrain-atta", name: "Multigrain Atta", type: "product-type" },
                            { id: "chakki-atta", name: "Chakki Atta", type: "product-type" },
                            { id: "organic-atta", name: "Organic Atta", type: "product-type" }
                        ]
                    },
                    {
                        id: "sooji-maida-daliya",
                        name: "Sooji, Maida & Daliya",
                        type: "product-group",
                        data: [
                            { id: "sooji", name: "Sooji", type: "product-type" },
                            { id: "maida", name: "Maida", type: "product-type" },
                            { id: "daliya", name: "Daliya", type: "product-type" },
                            { id: "rava", name: "Rava", type: "product-type" },
                            { id: "semolina", name: "Semolina", type: "product-type" },
                            { id: "broken-wheat", name: "Broken Wheat", type: "product-type" }
                        ]
                    },
                    {
                        id: "sattu-besan",
                        name: "Sattu & Besan",
                        type: "product-group",
                        data: [
                            { id: "gram-flour", name: "Gram Flour (Besan)", type: "product-type" },
                            { id: "sattu", name: "Sattu", type: "product-type" },
                            { id: "roasted-besan", name: "Roasted Besan", type: "product-type" }
                        ]
                    },
                    {
                        id: "millets-flours",
                        name: "Millets & Other Flours",
                        type: "product-group",
                        data: [
                            { id: "ragi-flour", name: "Ragi Flour", type: "product-type" },
                            { id: "jowar-flour", name: "Jowar Flour", type: "product-type" },
                            { id: "bajra-flour", name: "Bajra Flour", type: "product-type" },
                            { id: "rice-flour", name: "Rice Flour", type: "product-type" },
                            { id: "corn-flour", name: "Corn Flour", type: "product-type" },
                            { id: "oats-flour", name: "Oats Flour", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // OILS & GHEE
            // =========================
            {
                id: "oils-ghee",
                name: "Oils & Ghee",
                type: "sub-category",
                data: [
                    {
                        id: "ghee",
                        name: "Ghee",
                        type: "product-group",
                        data: [
                            { id: "cow-ghee", name: "Cow Ghee", type: "product-type" },
                            { id: "buffalo-ghee", name: "Buffalo Ghee", type: "product-type" },
                            { id: "organic-ghee", name: "Organic Ghee", type: "product-type" }
                        ]
                    },
                    {
                        id: "edible-oils",
                        name: "Edible Oils",
                        type: "product-group",
                        data: [
                            { id: "mustard-oil", name: "Mustard Oil", type: "product-type" },
                            { id: "sunflower-oil", name: "Sunflower Oil", type: "product-type" },
                            { id: "soyabean-oil", name: "Soyabean Oil", type: "product-type" },
                            { id: "groundnut-oil", name: "Groundnut Oil", type: "product-type" },
                            { id: "rice-bran-oil", name: "Rice Bran Oil", type: "product-type" },
                            { id: "olive-oil", name: "Olive Oil", type: "product-type" },
                            { id: "coconut-oil-edible", name: "Coconut Oil (Edible)", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // PULSES
            // =========================
            {
                id: "pulses",
                name: "Pulses",
                type: "sub-category",
                data: [
                    {
                        id: "dal-varieties",
                        name: "Dal Varieties",
                        type: "product-group",
                        data: [
                            { id: "toor-dal", name: "Toor Dal", type: "product-type" },
                            { id: "moong-dal", name: "Moong Dal", type: "product-type" },
                            { id: "masoor-dal", name: "Masoor Dal", type: "product-type" },
                            { id: "chana-dal", name: "Chana Dal", type: "product-type" },
                            { id: "urad-dal", name: "Urad Dal", type: "product-type" },
                            { id: "mix-dal", name: "Mix Dal", type: "product-type" }
                        ]
                    },
                    {
                        id: "whole-pulses",
                        name: "Whole Pulses",
                        type: "product-group",
                        data: [
                            { id: "rajma", name: "Rajma", type: "product-type" },
                            { id: "kabuli-chana", name: "Kabuli Chana", type: "product-type" },
                            { id: "kala-chana", name: "Kala Chana", type: "product-type" },
                            { id: "white-peas", name: "White Peas", type: "product-type" },
                            { id: "green-moong", name: "Green Moong", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // CEREALS & RICE
            // =========================
            {
                id: "cereals-rice",
                name: "Cereals & Rice",
                type: "sub-category",
                data: [
                    {
                        id: "basmati-rice",
                        name: "Basmati Rice",
                        type: "product-group",
                        data: [
                            { id: "long-grain-basmati", name: "Long Grain Basmati", type: "product-type" },
                            { id: "extra-long-basmati", name: "Extra Long Basmati", type: "product-type" },
                            { id: "brown-basmati", name: "Brown Basmati", type: "product-type" },
                            { id: "organic-basmati", name: "Organic Basmati", type: "product-type" }
                        ]
                    },
                    {
                        id: "regular-rice",
                        name: "Raw & Boiled Rice",
                        type: "product-group",
                        data: [
                            { id: "sona-masoori", name: "Sona Masoori", type: "product-type" },
                            { id: "kolam-rice", name: "Kolam Rice", type: "product-type" },
                            { id: "idli-rice", name: "Idli Rice", type: "product-type" },
                            { id: "parboiled-rice", name: "Parboiled Rice", type: "product-type" },
                            { id: "brown-rice", name: "Brown Rice", type: "product-type" }
                        ]
                    },
                    {
                        id: "other-cereals",
                        name: "Other Cereals",
                        type: "product-group",
                        data: [
                            { id: "poha", name: "Poha", type: "product-type" },
                            { id: "sabudana", name: "Sabudana", type: "product-type" },
                            { id: "corn-kernels", name: "Corn Kernels", type: "product-type" },
                            { id: "barley", name: "Barley", type: "product-type" },
                            { id: "quinoa", name: "Quinoa", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // DRY FRUITS & NUTS
            // =========================
            {
                id: "dry-fruits-nuts",
                name: "Dry Fruits & Nuts",
                type: "sub-category",
                data: [
                    {
                        id: "almonds",
                        name: "Almonds",
                        type: "product-group",
                        data: [
                            { id: "california-almond", name: "California Almond", type: "product-type" },
                            { id: "mamra-almond", name: "Mamra Almond", type: "product-type" },
                            { id: "roasted-almond", name: "Roasted Almond", type: "product-type" }
                        ]
                    },
                    {
                        id: "cashews",
                        name: "Cashews",
                        type: "product-group",
                        data: [
                            { id: "whole-cashew", name: "Whole Cashew", type: "product-type" },
                            { id: "broken-cashew", name: "Broken Cashew", type: "product-type" },
                            { id: "roasted-cashew", name: "Roasted Cashew", type: "product-type" }
                        ]
                    },
                    {
                        id: "pistachios",
                        name: "Pistachios",
                        type: "product-group",
                        data: [
                            { id: "salted-pista", name: "Salted Pista", type: "product-type" },
                            { id: "unsalted-pista", name: "Unsalted Pista", type: "product-type" }
                        ]
                    },
                    {
                        id: "raisins",
                        name: "Raisins",
                        type: "product-group",
                        data: [
                            { id: "golden-raisin", name: "Golden Raisin", type: "product-type" },
                            { id: "black-raisin", name: "Black Raisin", type: "product-type" }
                        ]
                    },
                    {
                        id: "seeds",
                        name: "Seeds",
                        type: "product-group",
                        data: [
                            { id: "chia-seeds", name: "Chia Seeds", type: "product-type" },
                            { id: "flax-seeds", name: "Flax Seeds", type: "product-type" },
                            { id: "pumpkin-seeds", name: "Pumpkin Seeds", type: "product-type" },
                            { id: "sunflower-seeds", name: "Sunflower Seeds", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // SALT SUGAR JAGGERY
            // =========================
            {
                id: "salt-sugar-jaggery",
                name: "Salt, Sugar & Jaggery",
                type: "sub-category",
                data: [
                    {
                        id: "salt",
                        name: "Salt",
                        type: "product-group",
                        data: [
                            { id: "iodized-salt", name: "Iodized Salt", type: "product-type" },
                            { id: "rock-salt", name: "Rock Salt", type: "product-type" },
                            { id: "sea-salt", name: "Sea Salt", type: "product-type" },
                            { id: "pink-salt", name: "Pink Salt", type: "product-type" }
                        ]
                    },
                    {
                        id: "sugar",
                        name: "Sugar",
                        type: "product-group",
                        data: [
                            { id: "white-sugar", name: "White Sugar", type: "product-type" },
                            { id: "brown-sugar", name: "Brown Sugar", type: "product-type" },
                            { id: "powdered-sugar", name: "Powdered Sugar", type: "product-type" }
                        ]
                    },
                    {
                        id: "jaggery",
                        name: "Jaggery",
                        type: "product-group",
                        data: [
                            { id: "solid-jaggery", name: "Solid Jaggery", type: "product-type" },
                            { id: "powder-jaggery", name: "Powder Jaggery", type: "product-type" },
                            { id: "liquid-jaggery", name: "Liquid Jaggery", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // MASALA & SPICES
            // =========================
            {
                id: "masala-spices",
                name: "Masala & Spices",
                type: "sub-category",
                data: [
                    {
                        id: "whole-spices",
                        name: "Whole Spices",
                        type: "product-group",
                        data: [
                            { id: "cumin-seeds", name: "Cumin Seeds", type: "product-type" },
                            { id: "mustard-seeds", name: "Mustard Seeds", type: "product-type" },
                            { id: "cloves", name: "Cloves", type: "product-type" },
                            { id: "cardamom", name: "Cardamom", type: "product-type" },
                            { id: "black-pepper", name: "Black Pepper", type: "product-type" }
                        ]
                    },
                    {
                        id: "powdered-spices",
                        name: "Powdered Spices",
                        type: "product-group",
                        data: [
                            { id: "turmeric-powder", name: "Turmeric Powder", type: "product-type" },
                            { id: "chilli-powder", name: "Chilli Powder", type: "product-type" },
                            { id: "coriander-powder", name: "Coriander Powder", type: "product-type" },
                            { id: "garam-masala", name: "Garam Masala", type: "product-type" }
                        ]
                    },
                    {
                        id: "blended-spices",
                        name: "Blended Spices",
                        type: "product-group",
                        data: [
                            { id: "paneer-masala", name: "Paneer Masala", type: "product-type" },
                            { id: "biryani-masala", name: "Biryani Masala", type: "product-type" },
                            { id: "chicken-masala", name: "Chicken Masala", type: "product-type" },
                            { id: "sambar-powder", name: "Sambar Powder", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // PICKLES & PAPAD
            // =========================
            {
                id: "pickles-papad",
                name: "Pickles & Papad",
                type: "sub-category",
                data: [
                    {
                        id: "pickles",
                        name: "Pickles",
                        type: "product-group",
                        data: [
                            { id: "mango-pickle", name: "Mango Pickle", type: "product-type" },
                            { id: "lime-pickle", name: "Lime Pickle", type: "product-type" },
                            { id: "mixed-pickle", name: "Mixed Pickle", type: "product-type" },
                            { id: "garlic-pickle", name: "Garlic Pickle", type: "product-type" }
                        ]
                    },
                    {
                        id: "papad",
                        name: "Papad",
                        type: "product-group",
                        data: [
                            { id: "urad-papad", name: "Urad Papad", type: "product-type" },
                            { id: "moong-papad", name: "Moong Papad", type: "product-type" },
                            { id: "rice-papad", name: "Rice Papad", type: "product-type" }
                        ]
                    },
                    {
                        id: "fryums",
                        name: "Fryums",
                        type: "product-group",
                        data: [
                            { id: "wheel-fryums", name: "Wheel Fryums", type: "product-type" },
                            { id: "tube-fryums", name: "Tube Fryums", type: "product-type" },
                            { id: "animal-shape-fryums", name: "Animal Shape Fryums", type: "product-type" }
                        ]
                    }
                ]
            }

        ]
    },
    {
        id: "dairy-breakfast",
        name: "Dairy & Breakfast",
        type: "category",
        data: [

            // =========================
            // MILK & DAIRY
            // =========================
            {
                id: "milk-dairy",
                name: "Milk & Dairy",
                type: "sub-category",
                data: [
                    {
                        id: "milk",
                        name: "Milk",
                        type: "product-group",
                        data: [
                            { id: "full-cream-milk", name: "Full Cream Milk", type: "product-type" },
                            { id: "toned-milk", name: "Toned Milk", type: "product-type" },
                            { id: "double-toned-milk", name: "Double Toned Milk", type: "product-type" },
                            { id: "skimmed-milk", name: "Skimmed Milk", type: "product-type" },
                            { id: "organic-milk", name: "Organic Milk", type: "product-type" },
                            { id: "flavoured-milk", name: "Flavoured Milk", type: "product-type" }
                        ]
                    },
                    {
                        id: "curd-yogurt",
                        name: "Curd & Yogurt",
                        type: "product-group",
                        data: [
                            { id: "plain-curd", name: "Plain Curd", type: "product-type" },
                            { id: "greek-yogurt", name: "Greek Yogurt", type: "product-type" },
                            { id: "probiotic-yogurt", name: "Probiotic Yogurt", type: "product-type" },
                            { id: "flavoured-yogurt", name: "Flavoured Yogurt", type: "product-type" }
                        ]
                    },
                    {
                        id: "paneer",
                        name: "Paneer",
                        type: "product-group",
                        data: [
                            { id: "fresh-paneer", name: "Fresh Paneer", type: "product-type" },
                            { id: "malai-paneer", name: "Malai Paneer", type: "product-type" },
                            { id: "low-fat-paneer", name: "Low Fat Paneer", type: "product-type" },
                            { id: "organic-paneer", name: "Organic Paneer", type: "product-type" }
                        ]
                    },
                    {
                        id: "butter",
                        name: "Butter",
                        type: "product-group",
                        data: [
                            { id: "salted-butter", name: "Salted Butter", type: "product-type" },
                            { id: "unsalted-butter", name: "Unsalted Butter", type: "product-type" },
                            { id: "white-butter", name: "White Butter", type: "product-type" }
                        ]
                    },
                    {
                        id: "cheese",
                        name: "Cheese",
                        type: "product-group",
                        data: [
                            { id: "processed-cheese", name: "Processed Cheese", type: "product-type" },
                            { id: "cheddar-cheese", name: "Cheddar Cheese", type: "product-type" },
                            { id: "mozzarella-cheese", name: "Mozzarella Cheese", type: "product-type" },
                            { id: "cheese-slices", name: "Cheese Slices", type: "product-type" },
                            { id: "cheese-spread", name: "Cheese Spread", type: "product-type" }
                        ]
                    },
                    {
                        id: "lassi-buttermilk",
                        name: "Lassi & Buttermilk",
                        type: "product-group",
                        data: [
                            { id: "sweet-lassi", name: "Sweet Lassi", type: "product-type" },
                            { id: "salted-lassi", name: "Salted Lassi", type: "product-type" },
                            { id: "buttermilk", name: "Buttermilk", type: "product-type" },
                            { id: "flavoured-lassi", name: "Flavoured Lassi", type: "product-type" }
                        ]
                    },
                    {
                        id: "cream",
                        name: "Cream",
                        type: "product-group",
                        data: [
                            { id: "fresh-cream", name: "Fresh Cream", type: "product-type" },
                            { id: "whipping-cream", name: "Whipping Cream", type: "product-type" },
                            { id: "malai", name: "Malai", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // BREAD & BUNS
            // =========================
            {
                id: "breads-buns-more",
                name: "Bread, Buns & More",
                type: "sub-category",
                data: [
                    {
                        id: "breads",
                        name: "Breads",
                        type: "product-group",
                        data: [
                            { id: "white-bread", name: "White Bread", type: "product-type" },
                            { id: "brown-bread", name: "Brown Bread", type: "product-type" },
                            { id: "multigrain-bread", name: "Multigrain Bread", type: "product-type" },
                            { id: "whole-wheat-bread", name: "Whole Wheat Bread", type: "product-type" },
                            { id: "sandwich-bread", name: "Sandwich Bread", type: "product-type" }
                        ]
                    },
                    {
                        id: "buns",
                        name: "Buns",
                        type: "product-group",
                        data: [
                            { id: "burger-bun", name: "Burger Bun", type: "product-type" },
                            { id: "pav-bun", name: "Pav Bun", type: "product-type" },
                            { id: "hotdog-bun", name: "Hotdog Bun", type: "product-type" }
                        ]
                    },
                    {
                        id: "cakes-pastries",
                        name: "Cakes & Pastries",
                        type: "product-group",
                        data: [
                            { id: "cream-roll", name: "Cream Roll", type: "product-type" },
                            { id: "sponge-cake", name: "Sponge Cake", type: "product-type" },
                            { id: "cup-cake", name: "Cup Cake", type: "product-type" },
                            { id: "fruit-cake", name: "Fruit Cake", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // BREAKFAST & CEREALS
            // =========================
            {
                id: "breakfast-cereals",
                name: "Breakfast & Cereals",
                type: "sub-category",
                data: [
                    {
                        id: "oats",
                        name: "Oats",
                        type: "product-group",
                        data: [
                            { id: "rolled-oats", name: "Rolled Oats", type: "product-type" },
                            { id: "instant-oats", name: "Instant Oats", type: "product-type" },
                            { id: "steel-cut-oats", name: "Steel Cut Oats", type: "product-type" },
                            { id: "flavoured-oats", name: "Flavoured Oats", type: "product-type" }
                        ]
                    },
                    {
                        id: "cornflakes-muesli",
                        name: "Cornflakes & Muesli",
                        type: "product-group",
                        data: [
                            { id: "plain-cornflakes", name: "Plain Cornflakes", type: "product-type" },
                            { id: "honey-cornflakes", name: "Honey Cornflakes", type: "product-type" },
                            { id: "muesli", name: "Muesli", type: "product-type" },
                            { id: "granola", name: "Granola", type: "product-type" }
                        ]
                    },
                    {
                        id: "instant-breakfast",
                        name: "Instant Breakfast",
                        type: "product-group",
                        data: [
                            { id: "poha-mix", name: "Poha Mix", type: "product-type" },
                            { id: "upma-mix", name: "Upma Mix", type: "product-type" },
                            { id: "idli-mix", name: "Idli Mix", type: "product-type" },
                            { id: "dosa-mix", name: "Dosa Mix", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // JAMS & SPREADS
            // =========================
            {
                id: "jams-spreads",
                name: "Jams & Spreads",
                type: "sub-category",
                data: [
                    {
                        id: "jams",
                        name: "Jams",
                        type: "product-group",
                        data: [
                            { id: "mixed-fruit-jam", name: "Mixed Fruit Jam", type: "product-type" },
                            { id: "strawberry-jam", name: "Strawberry Jam", type: "product-type" },
                            { id: "mango-jam", name: "Mango Jam", type: "product-type" }
                        ]
                    },
                    {
                        id: "honey",
                        name: "Honey",
                        type: "product-group",
                        data: [
                            { id: "raw-honey", name: "Raw Honey", type: "product-type" },
                            { id: "organic-honey", name: "Organic Honey", type: "product-type" },
                            { id: "multiflora-honey", name: "Multiflora Honey", type: "product-type" }
                        ]
                    },
                    {
                        id: "peanut-butter",
                        name: "Peanut Butter",
                        type: "product-group",
                        data: [
                            { id: "creamy-peanut-butter", name: "Creamy Peanut Butter", type: "product-type" },
                            { id: "crunchy-peanut-butter", name: "Crunchy Peanut Butter", type: "product-type" },
                            { id: "natural-peanut-butter", name: "Natural Peanut Butter", type: "product-type" }
                        ]
                    }
                ]
            }

        ]
    },
    {
        id: "snacks-drinks",
        name: "Snacks & Drinks",
        type: "category",
        data: [

            // =========================
            // CHIPS & NAMKEEN
            // =========================
            {
                id: "chips-namkeen",
                name: "Chips & Namkeen",
                type: "sub-category",
                data: [
                    {
                        id: "chips-nachos",
                        name: "Chips & Nachos",
                        type: "product-group",
                        data: [
                            { id: "potato-chips", name: "Potato Chips", type: "product-type" },
                            { id: "banana-chips", name: "Banana Chips", type: "product-type" },
                            { id: "tortilla-nachos", name: "Tortilla Nachos", type: "product-type" },
                            { id: "multigrain-chips", name: "Multigrain Chips", type: "product-type" },
                            { id: "baked-chips", name: "Baked Chips", type: "product-type" }
                        ]
                    },
                    {
                        id: "bhujia-mixtures",
                        name: "Bhujia & Mixtures",
                        type: "product-group",
                        data: [
                            { id: "aloo-bhujia", name: "Aloo Bhujia", type: "product-type" },
                            { id: "besan-bhujia", name: "Besan Bhujia", type: "product-type" },
                            { id: "navratan-mixture", name: "Navratan Mixture", type: "product-type" },
                            { id: "bombay-mixture", name: "Bombay Mixture", type: "product-type" }
                        ]
                    },
                    {
                        id: "namkeen-snacks",
                        name: "Namkeen Snacks",
                        type: "product-group",
                        data: [
                            { id: "sev", name: "Sev", type: "product-type" },
                            { id: "chakli", name: "Chakli", type: "product-type" },
                            { id: "mathri", name: "Mathri", type: "product-type" },
                            { id: "kachori-snack", name: "Kachori Snack", type: "product-type" }
                        ]
                    },
                    {
                        id: "popcorn",
                        name: "Popcorn",
                        type: "product-group",
                        data: [
                            { id: "butter-popcorn", name: "Butter Popcorn", type: "product-type" },
                            { id: "caramel-popcorn", name: "Caramel Popcorn", type: "product-type" },
                            { id: "cheese-popcorn", name: "Cheese Popcorn", type: "product-type" },
                            { id: "microwave-popcorn", name: "Microwave Popcorn", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // BISCUITS & COOKIES
            // =========================
            {
                id: "biscuits-cookies",
                name: "Biscuits & Cookies",
                type: "sub-category",
                data: [
                    {
                        id: "marie-digestive",
                        name: "Marie & Digestive",
                        type: "product-group",
                        data: [
                            { id: "marie-biscuit", name: "Marie Biscuit", type: "product-type" },
                            { id: "digestive-biscuit", name: "Digestive Biscuit", type: "product-type" },
                            { id: "sugar-free-digestive", name: "Sugar Free Digestive", type: "product-type" }
                        ]
                    },
                    {
                        id: "cream-biscuits",
                        name: "Cream Biscuits",
                        type: "product-group",
                        data: [
                            { id: "chocolate-cream", name: "Chocolate Cream", type: "product-type" },
                            { id: "vanilla-cream", name: "Vanilla Cream", type: "product-type" },
                            { id: "strawberry-cream", name: "Strawberry Cream", type: "product-type" }
                        ]
                    },
                    {
                        id: "cookies",
                        name: "Cookies",
                        type: "product-group",
                        data: [
                            { id: "choco-chip", name: "Choco Chip", type: "product-type" },
                            { id: "butter-cookie", name: "Butter Cookie", type: "product-type" },
                            { id: "oat-cookie", name: "Oat Cookie", type: "product-type" },
                            { id: "dry-fruit-cookie", name: "Dry Fruit Cookie", type: "product-type" }
                        ]
                    },
                    {
                        id: "glucose-milk-biscuits",
                        name: "Glucose & Milk Biscuits",
                        type: "product-group",
                        data: [
                            { id: "glucose-biscuit", name: "Glucose Biscuit", type: "product-type" },
                            { id: "milk-biscuit", name: "Milk Biscuit", type: "product-type" }
                        ]
                    },
                    {
                        id: "sweet-salty-biscuits",
                        name: "Sweet & Salty Biscuits",
                        type: "product-group",
                        data: [
                            { id: "salted-biscuit", name: "Salted Biscuit", type: "product-type" },
                            { id: "sweet-biscuit", name: "Sweet Biscuit", type: "product-type" }
                        ]
                    },
                    {
                        id: "rusk-khari-wafers",
                        name: "Rusk, Khari & Wafers",
                        type: "product-group",
                        data: [
                            { id: "milk-rusk", name: "Milk Rusk", type: "product-type" },
                            { id: "elaichi-rusk", name: "Elaichi Rusk", type: "product-type" },
                            { id: "khari-biscuit", name: "Khari Biscuit", type: "product-type" },
                            { id: "cream-wafer", name: "Cream Wafer", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // NOODLES & INSTANT FOOD
            // =========================
            {
                id: "noodles-instant-food",
                name: "Noodles & Instant Food",
                type: "sub-category",
                data: [
                    {
                        id: "noodles",
                        name: "Noodles",
                        type: "product-group",
                        data: [
                            { id: "masala-noodles", name: "Masala Noodles", type: "product-type" },
                            { id: "chicken-noodles", name: "Chicken Noodles", type: "product-type" },
                            { id: "veg-noodles", name: "Veg Noodles", type: "product-type" },
                            { id: "cup-noodles", name: "Cup Noodles", type: "product-type" }
                        ]
                    },
                    {
                        id: "pasta",
                        name: "Pasta",
                        type: "product-group",
                        data: [
                            { id: "macaroni", name: "Macaroni", type: "product-type" },
                            { id: "penne", name: "Penne", type: "product-type" },
                            { id: "fusilli", name: "Fusilli", type: "product-type" }
                        ]
                    },
                    {
                        id: "vermicelli",
                        name: "Vermicelli",
                        type: "product-group",
                        data: [
                            { id: "plain-vermicelli", name: "Plain Vermicelli", type: "product-type" },
                            { id: "roasted-vermicelli", name: "Roasted Vermicelli", type: "product-type" }
                        ]
                    },
                    {
                        id: "soup",
                        name: "Soup",
                        type: "product-group",
                        data: [
                            { id: "tomato-soup", name: "Tomato Soup", type: "product-type" },
                            { id: "sweet-corn-soup", name: "Sweet Corn Soup", type: "product-type" },
                            { id: "hot-sour-soup", name: "Hot & Sour Soup", type: "product-type" }
                        ]
                    },
                    {
                        id: "instant-mix",
                        name: "Instant Mix",
                        type: "product-group",
                        data: [
                            { id: "poha-mix", name: "Poha Mix", type: "product-type" },
                            { id: "upma-mix", name: "Upma Mix", type: "product-type" },
                            { id: "gulab-jamun-mix", name: "Gulab Jamun Mix", type: "product-type" }
                        ]
                    },
                    {
                        id: "ready-to-eat",
                        name: "Ready to Eat",
                        type: "product-group",
                        data: [
                            { id: "dal-makhani-rte", name: "Dal Makhani RTE", type: "product-type" },
                            { id: "rajma-rice-rte", name: "Rajma Rice RTE", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // SAUCES & DIPS
            // =========================
            {
                id: "sauces-dips",
                name: "Sauces & Dips",
                type: "sub-category",
                data: [
                    {
                        id: "tomato-ketchup",
                        name: "Tomato Ketchup",
                        type: "product-group",
                        data: [
                            { id: "classic-ketchup", name: "Classic Ketchup", type: "product-type" },
                            { id: "no-onion-no-garlic-ketchup", name: "No Onion No Garlic Ketchup", type: "product-type" },
                            { id: "organic-ketchup", name: "Organic Ketchup", type: "product-type" }
                        ]
                    },
                    {
                        id: "mayonnaise",
                        name: "Mayonnaise",
                        type: "product-group",
                        data: [
                            { id: "eggless-mayo", name: "Eggless Mayonnaise", type: "product-type" },
                            { id: "garlic-mayo", name: "Garlic Mayonnaise", type: "product-type" },
                            { id: "cheese-mayo", name: "Cheese Mayonnaise", type: "product-type" }
                        ]
                    },
                    {
                        id: "peanut-butter",
                        name: "Peanut Butter",
                        type: "product-group",
                        data: [
                            { id: "crunchy-peanut-butter", name: "Crunchy Peanut Butter", type: "product-type" },
                            { id: "smooth-peanut-butter", name: "Smooth Peanut Butter", type: "product-type" },
                            { id: "sugar-free-peanut-butter", name: "Sugar Free Peanut Butter", type: "product-type" }
                        ]
                    },
                    {
                        id: "syrup-pre-mixes",
                        name: "Syrup & Pre Mixes",
                        type: "product-group",
                        data: [
                            { id: "chocolate-syrup", name: "Chocolate Syrup", type: "product-type" },
                            { id: "strawberry-syrup", name: "Strawberry Syrup", type: "product-type" },
                            { id: "lemonade-premix", name: "Lemonade Premix", type: "product-type" }
                        ]
                    },
                    {
                        id: "chinese-sauces",
                        name: "Chinese Sauces",
                        type: "product-group",
                        data: [
                            { id: "soy-sauce", name: "Soy Sauce", type: "product-type" },
                            { id: "chilli-sauce", name: "Chilli Sauce", type: "product-type" },
                            { id: "schezwan-sauce", name: "Schezwan Sauce", type: "product-type" }
                        ]
                    },
                    {
                        id: "dips-salad-dressings",
                        name: "Dips & Salad Dressings",
                        type: "product-group",
                        data: [
                            { id: "cheese-dip", name: "Cheese Dip", type: "product-type" },
                            { id: "mint-dip", name: "Mint Dip", type: "product-type" },
                            { id: "vinaigrette-dressing", name: "Vinaigrette Dressing", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // CHOCOLATES & SWEETS
            // =========================
            {
                id: "chocolates-sweets",
                name: "Chocolates & Sweets",
                type: "sub-category",
                data: [
                    {
                        id: "chocolate",
                        name: "Chocolate",
                        type: "product-group",
                        data: [
                            { id: "milk-chocolate", name: "Milk Chocolate", type: "product-type" },
                            { id: "dark-chocolate", name: "Dark Chocolate", type: "product-type" },
                            { id: "white-chocolate", name: "White Chocolate", type: "product-type" }
                        ]
                    },
                    {
                        id: "cakes-pies",
                        name: "Cakes & Pies",
                        type: "product-group",
                        data: [
                            { id: "chocolate-cake", name: "Chocolate Cake", type: "product-type" },
                            { id: "fruit-cake", name: "Fruit Cake", type: "product-type" },
                            { id: "cream-pie", name: "Cream Pie", type: "product-type" }
                        ]
                    },
                    {
                        id: "indian-mithai",
                        name: "Indian Mithai",
                        type: "product-group",
                        data: [
                            { id: "gulab-jamun", name: "Gulab Jamun", type: "product-type" },
                            { id: "rasgulla", name: "Rasgulla", type: "product-type" },
                            { id: "kaju-katli", name: "Kaju Katli", type: "product-type" }
                        ]
                    },
                    {
                        id: "dessert-mixes",
                        name: "Dessert Mixes",
                        type: "product-group",
                        data: [
                            { id: "gulab-jamun-mix", name: "Gulab Jamun Mix", type: "product-type" },
                            { id: "rasmalai-mix", name: "Rasmalai Mix", type: "product-type" }
                        ]
                    },
                    {
                        id: "candies-gums",
                        name: "Candies & Gums",
                        type: "product-group",
                        data: [
                            { id: "hard-candy", name: "Hard Candy", type: "product-type" },
                            { id: "chewing-gum", name: "Chewing Gum", type: "product-type" },
                            { id: "lollipop", name: "Lollipop", type: "product-type" }
                        ]
                    },
                    {
                        id: "mint-mouth-freshners",
                        name: "Mint & Mouth Freshners",
                        type: "product-group",
                        data: [
                            { id: "mint-candy", name: "Mint Candy", type: "product-type" },
                            { id: "saunf-mix", name: "Saunf Mix", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // DRINKS & JUICES
            // =========================
            {
                id: "drinks-juices",
                name: "Drinks & Juices",
                type: "sub-category",
                data: [
                    {
                        id: "cold-drinks",
                        name: "Cold Drinks",
                        type: "product-group",
                        data: [
                            { id: "cola", name: "Cola", type: "product-type" },
                            { id: "lemon-soft-drink", name: "Lemon Soft Drink", type: "product-type" }
                        ]
                    },
                    {
                        id: "fruit-juices",
                        name: "Fruits Juices",
                        type: "product-group",
                        data: [
                            { id: "mango-juice", name: "Mango Juice", type: "product-type" },
                            { id: "apple-juice", name: "Apple Juice", type: "product-type" },
                            { id: "mixed-fruit-juice", name: "Mixed Fruit Juice", type: "product-type" }
                        ]
                    },
                    {
                        id: "energy-drinks",
                        name: "Energy Drinks",
                        type: "product-group",
                        data: [
                            { id: "regular-energy-drink", name: "Regular Energy Drink", type: "product-type" },
                            { id: "sugar-free-energy-drink", name: "Sugar Free Energy Drink", type: "product-type" }
                        ]
                    },
                    {
                        id: "water-soda",
                        name: "Water & Soda",
                        type: "product-group",
                        data: [
                            { id: "mineral-water", name: "Mineral Water", type: "product-type" },
                            { id: "sparkling-water", name: "Sparkling Water", type: "product-type" },
                            { id: "soda", name: "Soda", type: "product-type" }
                        ]
                    },
                    {
                        id: "lassi-buttermilk-milkshakes",
                        name: "Lassi, Buttermilk & Milkshakes",
                        type: "product-group",
                        data: [
                            { id: "sweet-lassi", name: "Sweet Lassi", type: "product-type" },
                            { id: "salted-buttermilk", name: "Salted Buttermilk", type: "product-type" },
                            { id: "chocolate-milkshake", name: "Chocolate Milkshake", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // TEA, COFFEE & MILK DRINKS
            // =========================
            {
                id: "tea-coffee-milk-drinks",
                name: "Tea, Coffee & Milk Drinks",
                type: "sub-category",
                data: [
                    {
                        id: "leaf-dust-tea",
                        name: "Leaf & Dust Tea",
                        type: "product-group",
                        data: [
                            { id: "assam-tea", name: "Assam Tea", type: "product-type" },
                            { id: "darjeeling-tea", name: "Darjeeling Tea", type: "product-type" }
                        ]
                    },
                    {
                        id: "coffee",
                        name: "Coffee",
                        type: "product-group",
                        data: [
                            { id: "instant-coffee", name: "Instant Coffee", type: "product-type" },
                            { id: "filter-coffee", name: "Filter Coffee", type: "product-type" }
                        ]
                    },
                    {
                        id: "milk-health-drinks",
                        name: "Milk & Health Drinks",
                        type: "product-group",
                        data: [
                            { id: "flavoured-milk", name: "Flavoured Milk", type: "product-type" },
                            { id: "health-malt-drink", name: "Health Malt Drink", type: "product-type" }
                        ]
                    },
                    {
                        id: "green-flavoured-tea",
                        name: "Green & Flavoured Tea",
                        type: "product-group",
                        data: [
                            { id: "green-tea", name: "Green Tea", type: "product-type" },
                            { id: "lemon-green-tea", name: "Lemon Green Tea", type: "product-type" }
                        ]
                    }
                ]
            },

            // =========================
            // ICE CREAMS & FROZEN FOOD
            // =========================
            {
                id: "ice-creams-frozen-food",
                name: "Ice Creams & Frozen Food",
                type: "sub-category",
                data: [
                    {
                        id: "frozen-foods",
                        name: "Frozen Foods",
                        type: "product-group",
                        data: [
                            { id: "frozen-peas", name: "Frozen Peas", type: "product-type" },
                            { id: "frozen-fries", name: "Frozen Fries", type: "product-type" }
                        ]
                    },
                    {
                        id: "tubs",
                        name: "Tubs",
                        type: "product-group",
                        data: [
                            { id: "family-pack-vanilla", name: "Family Pack Vanilla", type: "product-type" },
                            { id: "family-pack-chocolate", name: "Family Pack Chocolate", type: "product-type" }
                        ]
                    },
                    {
                        id: "sticks",
                        name: "Sticks",
                        type: "product-group",
                        data: [
                            { id: "choco-stick", name: "Choco Stick", type: "product-type" },
                            { id: "kulfi-stick", name: "Kulfi Stick", type: "product-type" }
                        ]
                    },
                    {
                        id: "cones",
                        name: "Cones",
                        type: "product-group",
                        data: [
                            { id: "chocolate-cone", name: "Chocolate Cone", type: "product-type" },
                            { id: "vanilla-cone", name: "Vanilla Cone", type: "product-type" }
                        ]
                    },
                    {
                        id: "cassata-sandwich",
                        name: "Cassata & Sandwich",
                        type: "product-group",
                        data: [
                            { id: "cassata", name: "Cassata", type: "product-type" },
                            { id: "ice-cream-sandwich", name: "Ice Cream Sandwich", type: "product-type" }
                        ]
                    },
                    {
                        id: "single-serve-cups",
                        name: "Single Serve Cups",
                        type: "product-group",
                        data: [
                            { id: "single-serve-vanilla", name: "Single Serve Vanilla", type: "product-type" }
                        ]
                    },
                    {
                        id: "cakes-others",
                        name: "Cakes & Others",
                        type: "product-group",
                        data: [
                            { id: "ice-cream-cake", name: "Ice Cream Cake", type: "product-type" }
                        ]
                    }
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
                id: "soaps-body-washes",
                name: "Soaps & Body Washes",
                type: "sub-category",
                data: [

                    {
                        id: "soaps",
                        name: "Soaps",
                        type: "product-group",
                        data: [
                            { id: "bathing-soap", name: "Bathing Soap", type: "product-type" },
                            { id: "herbal-soap", name: "Herbal Soap", type: "product-type" },
                            { id: "medicated-soap", name: "Medicated Soap", type: "product-type" },
                            { id: "moisturizing-soap", name: "Moisturizing Soap", type: "product-type" },
                            { id: "glycerin-soap", name: "Glycerin Soap", type: "product-type" }
                        ]
                    },

                    {
                        id: "shower-gel",
                        name: "Shower Gel",
                        type: "product-group",
                        data: [
                            { id: "moisturizing-body-wash", name: "Moisturizing Body Wash", type: "product-type" },
                            { id: "refreshing-body-wash", name: "Refreshing Body Wash", type: "product-type" },
                            { id: "ayurvedic-body-wash", name: "Ayurvedic Body Wash", type: "product-type" }
                        ]
                    },

                    {
                        id: "handwash-sanitisers",
                        name: "Handwash & Sanitisers",
                        type: "product-group",
                        data: [
                            { id: "liquid-handwash", name: "Liquid Handwash", type: "product-type" },
                            { id: "foaming-handwash", name: "Foaming Handwash", type: "product-type" },
                            { id: "alcohol-sanitiser", name: "Alcohol Sanitiser", type: "product-type" },
                            { id: "gel-sanitiser", name: "Gel Sanitiser", type: "product-type" }
                        ]
                    },

                    {
                        id: "bathing-accessories",
                        name: "Bathing Accessories",
                        type: "product-group",
                        data: [
                            { id: "loofah", name: "Loofah", type: "product-type" },
                            { id: "bath-brush", name: "Bath Brush", type: "product-type" },
                            { id: "body-scrubber", name: "Body Scrubber", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "skin-face-care",
                name: "Skin & Face Care",
                type: "sub-category",
                data: [

                    {
                        id: "face-wash-cleanser",
                        name: "Face Wash & Cleanser",
                        type: "product-group",
                        data: [
                            { id: "foam-face-wash", name: "Foam Face Wash", type: "product-type" },
                            { id: "gel-face-wash", name: "Gel Face Wash", type: "product-type" },
                            { id: "cream-cleanser", name: "Cream Cleanser", type: "product-type" },
                            { id: "micellar-water", name: "Micellar Water", type: "product-type" }
                        ]
                    },

                    {
                        id: "scrub-exfoliators",
                        name: "Scrub & Exfoliators",
                        type: "product-group",
                        data: [
                            { id: "face-scrub", name: "Face Scrub", type: "product-type" },
                            { id: "body-scrub", name: "Body Scrub", type: "product-type" },
                            { id: "charcoal-scrub", name: "Charcoal Scrub", type: "product-type" }
                        ]
                    },

                    {
                        id: "face-cream-toner-rose-water",
                        name: "Face Cream, Toner & Rose Water",
                        type: "product-group",
                        data: [
                            { id: "moisturizer-cream", name: "Moisturizer Cream", type: "product-type" },
                            { id: "night-cream", name: "Night Cream", type: "product-type" },
                            { id: "face-toner", name: "Face Toner", type: "product-type" },
                            { id: "rose-water", name: "Rose Water", type: "product-type" }
                        ]
                    },

                    {
                        id: "body-oil-lotion-moisturizer",
                        name: "Body Oil, Lotion & Moisturizer",
                        type: "product-group",
                        data: [
                            { id: "body-lotion", name: "Body Lotion", type: "product-type" },
                            { id: "body-butter", name: "Body Butter", type: "product-type" },
                            { id: "body-oil", name: "Body Oil", type: "product-type" }
                        ]
                    },

                    {
                        id: "mens-grooming",
                        name: "Men's Grooming",
                        type: "product-group",
                        data: [
                            { id: "shaving-cream", name: "Shaving Cream", type: "product-type" },
                            { id: "after-shave", name: "After Shave", type: "product-type" },
                            { id: "beard-oil", name: "Beard Oil", type: "product-type" },
                            { id: "beard-wash", name: "Beard Wash", type: "product-type" }
                        ]
                    },

                    {
                        id: "facial-kit-mask-wipes",
                        name: "Facial Kit, Mask & Wipes",
                        type: "product-group",
                        data: [
                            { id: "facial-kit", name: "Facial Kit", type: "product-type" },
                            { id: "sheet-mask", name: "Sheet Mask", type: "product-type" },
                            { id: "face-wipes", name: "Face Wipes", type: "product-type" }
                        ]
                    },

                    {
                        id: "lip-care",
                        name: "Lip Care",
                        type: "product-group",
                        data: [
                            { id: "lip-balm", name: "Lip Balm", type: "product-type" },
                            { id: "tinted-lip-balm", name: "Tinted Lip Balm", type: "product-type" },
                            { id: "lip-scrub", name: "Lip Scrub", type: "product-type" }
                        ]
                    },

                    {
                        id: "sunscreen",
                        name: "Sunscreen",
                        type: "product-group",
                        data: [
                            { id: "spf-30", name: "SPF 30 Sunscreen", type: "product-type" },
                            { id: "spf-50", name: "SPF 50 Sunscreen", type: "product-type" },
                            { id: "gel-sunscreen", name: "Gel Sunscreen", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "hair-care",
                name: "Hair Care",
                type: "sub-category",
                data: [

                    {
                        id: "shampoo",
                        name: "Shampoo",
                        type: "product-group",
                        data: [
                            { id: "anti-dandruff-shampoo", name: "Anti Dandruff Shampoo", type: "product-type" },
                            { id: "herbal-shampoo", name: "Herbal Shampoo", type: "product-type" },
                            { id: "protein-shampoo", name: "Protein Shampoo", type: "product-type" },
                            { id: "baby-shampoo", name: "Baby Shampoo", type: "product-type" }
                        ]
                    },

                    {
                        id: "hair-oil-serum",
                        name: "Hair Oil & Serum",
                        type: "product-group",
                        data: [
                            { id: "coconut-oil", name: "Coconut Oil", type: "product-type" },
                            { id: "almond-oil", name: "Almond Oil", type: "product-type" },
                            { id: "amla-oil", name: "Amla Oil", type: "product-type" },
                            { id: "hair-serum", name: "Hair Serum", type: "product-type" }
                        ]
                    },

                    {
                        id: "hair-colour-mehendi",
                        name: "Hair Colour & Mehendi",
                        type: "product-group",
                        data: [
                            { id: "permanent-hair-colour", name: "Permanent Hair Colour", type: "product-type" },
                            { id: "temporary-hair-colour", name: "Temporary Hair Colour", type: "product-type" },
                            { id: "mehendi-powder", name: "Mehendi Powder", type: "product-type" },
                            { id: "mehendi-cone", name: "Mehendi Cone", type: "product-type" }
                        ]
                    },

                    {
                        id: "conditioner",
                        name: "Conditioner",
                        type: "product-group",
                        data: [
                            { id: "repair-conditioner", name: "Repair Conditioner", type: "product-type" },
                            { id: "smoothening-conditioner", name: "Smoothening Conditioner", type: "product-type" },
                            { id: "anti-hairfall-conditioner", name: "Anti Hairfall Conditioner", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "dental-care",
                name: "Dental Care",
                type: "sub-category",
                data: [

                    {
                        id: "toothpaste",
                        name: "Tooth Paste",
                        type: "product-group",
                        data: [
                            { id: "herbal-toothpaste", name: "Herbal Toothpaste", type: "product-type" },
                            { id: "whitening-toothpaste", name: "Whitening Toothpaste", type: "product-type" },
                            { id: "sensitive-toothpaste", name: "Sensitive Toothpaste", type: "product-type" },
                            { id: "kids-toothpaste", name: "Kids Toothpaste", type: "product-type" }
                        ]
                    },

                    {
                        id: "toothbrush",
                        name: "Tooth Brush",
                        type: "product-group",
                        data: [
                            { id: "soft-toothbrush", name: "Soft Toothbrush", type: "product-type" },
                            { id: "medium-toothbrush", name: "Medium Toothbrush", type: "product-type" },
                            { id: "electric-toothbrush", name: "Electric Toothbrush", type: "product-type" }
                        ]
                    },

                    {
                        id: "mouthwash-oral-accessories",
                        name: "Mouth Wash & Oral Accessories",
                        type: "product-group",
                        data: [
                            { id: "antiseptic-mouthwash", name: "Antiseptic Mouthwash", type: "product-type" },
                            { id: "alcohol-free-mouthwash", name: "Alcohol Free Mouthwash", type: "product-type" },
                            { id: "dental-floss", name: "Dental Floss", type: "product-type" }
                        ]
                    },

                    {
                        id: "kids-oral-care",
                        name: "Kids Oral Care",
                        type: "product-group",
                        data: [
                            { id: "kids-toothbrush", name: "Kids Toothbrush", type: "product-type" },
                            { id: "kids-mouthwash", name: "Kids Mouthwash", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "perfumes-talcum",
                name: "Perfumes & Talcum Powders",
                type: "sub-category",
                data: [

                    {
                        id: "deodorants",
                        name: "Deodorants",
                        type: "product-group",
                        data: [
                            { id: "spray-deodorant", name: "Spray Deodorant", type: "product-type" },
                            { id: "gas-free-deodorant", name: "Gas Free Deodorant", type: "product-type" }
                        ]
                    },

                    {
                        id: "perfumes",
                        name: "Perfumes",
                        type: "product-group",
                        data: [
                            { id: "eau-de-parfum", name: "Eau De Parfum", type: "product-type" },
                            { id: "eau-de-toilette", name: "Eau De Toilette", type: "product-type" },
                            { id: "attar", name: "Attar", type: "product-type" }
                        ]
                    },

                    {
                        id: "roll-on",
                        name: "Roll On",
                        type: "product-group",
                        data: [
                            { id: "anti-perspirant-rollon", name: "Anti Perspirant Roll On", type: "product-type" }
                        ]
                    },

                    {
                        id: "talcum-powder",
                        name: "Talcum Powder",
                        type: "product-group",
                        data: [
                            { id: "cooling-powder", name: "Cooling Powder", type: "product-type" },
                            { id: "herbal-talc", name: "Herbal Talc", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "health-wellness",
                name: "Health & Wellness",
                type: "sub-category",
                data: [

                    {
                        id: "wound-care",
                        name: "Wound Care",
                        type: "product-group",
                        data: [
                            { id: "bandage", name: "Bandage", type: "product-type" },
                            { id: "antiseptic-liquid", name: "Antiseptic Liquid", type: "product-type" }
                        ]
                    },

                    {
                        id: "health-ayurveda",
                        name: "Health Ayurveda",
                        type: "product-group",
                        data: [
                            { id: "chyawanprash", name: "Chyawanprash", type: "product-type" },
                            { id: "ayurvedic-tonic", name: "Ayurvedic Tonic", type: "product-type" }
                        ]
                    },

                    {
                        id: "health-essentials",
                        name: "Health Essentials",
                        type: "product-group",
                        data: [
                            { id: "thermometer", name: "Thermometer", type: "product-type" },
                            { id: "glucose-powder", name: "Glucose Powder", type: "product-type" }
                        ]
                    },

                    {
                        id: "pain-relief",
                        name: "Pain Relief",
                        type: "product-group",
                        data: [
                            { id: "pain-relief-spray", name: "Pain Relief Spray", type: "product-type" },
                            { id: "pain-relief-balm", name: "Pain Relief Balm", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "baby-care",
                name: "Baby Care",
                type: "sub-category",
                data: [

                    {
                        id: "baby-food",
                        name: "Baby Food",
                        type: "product-group",
                        data: [
                            { id: "infant-formula", name: "Infant Formula", type: "product-type" },
                            { id: "baby-cereal", name: "Baby Cereal", type: "product-type" }
                        ]
                    },

                    {
                        id: "baby-shampoo-soaps",
                        name: "Shampoo & Soaps",
                        type: "product-group",
                        data: [
                            { id: "baby-soap", name: "Baby Soap", type: "product-type" },
                            { id: "tear-free-shampoo", name: "Tear Free Shampoo", type: "product-type" }
                        ]
                    },

                    {
                        id: "diapers-wipes",
                        name: "Diapers & Wipes",
                        type: "product-group",
                        data: [
                            { id: "newborn-diapers", name: "Newborn Diapers", type: "product-type" },
                            { id: "baby-wipes", name: "Baby Wipes", type: "product-type" }
                        ]
                    },

                    {
                        id: "baby-oil-cream-powder",
                        name: "Oil, Cream & Powder",
                        type: "product-group",
                        data: [
                            { id: "baby-oil", name: "Baby Oil", type: "product-type" },
                            { id: "baby-lotion", name: "Baby Lotion", type: "product-type" },
                            { id: "baby-powder", name: "Baby Powder", type: "product-type" }
                        ]
                    },

                    {
                        id: "baby-health-tooth-care",
                        name: "Baby Health & Tooth Care",
                        type: "product-group",
                        data: [
                            { id: "baby-thermometer", name: "Baby Thermometer", type: "product-type" },
                            { id: "baby-toothbrush", name: "Baby Toothbrush", type: "product-type" }
                        ]
                    },

                    {
                        id: "baby-accessories",
                        name: "Baby Accessories",
                        type: "product-group",
                        data: [
                            { id: "feeding-bottle", name: "Feeding Bottle", type: "product-type" },
                            { id: "pacifier", name: "Pacifier", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "feminine-hygiene",
                name: "Feminine Hygiene",
                type: "sub-category",
                data: [

                    {
                        id: "sanitary-pad",
                        name: "Sanitary Pad",
                        type: "product-group",
                        data: [
                            { id: "regular-pad", name: "Regular Pad", type: "product-type" },
                            { id: "xl-pad", name: "XL Pad", type: "product-type" },
                            { id: "overnight-pad", name: "Overnight Pad", type: "product-type" }
                        ]
                    },

                    {
                        id: "hair-removal",
                        name: "Hair Removal",
                        type: "product-group",
                        data: [
                            { id: "hair-removal-cream", name: "Hair Removal Cream", type: "product-type" },
                            { id: "wax-strips", name: "Wax Strips", type: "product-type" },
                            { id: "razor", name: "Razor", type: "product-type" }
                        ]
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
                id: "cleaning-essentials",
                name: "Cleaning Essentials",
                type: "sub-category",
                data: [

                    {
                        id: "repellents-disinfection",
                        name: "Repellents & Disinfections",
                        type: "product-group",
                        data: [
                            { id: "mosquito-repellent-liquid", name: "Mosquito Repellent Liquid", type: "product-type" },
                            { id: "mosquito-coil", name: "Mosquito Coil", type: "product-type" },
                            { id: "surface-disinfectant", name: "Surface Disinfectant", type: "product-type" },
                            { id: "bleaching-powder", name: "Bleaching Powder", type: "product-type" }
                        ]
                    },

                    {
                        id: "glass-metal-cleaners",
                        name: "Glass, Metal Cleaners",
                        type: "product-group",
                        data: [
                            { id: "glass-cleaner-spray", name: "Glass Cleaner Spray", type: "product-type" },
                            { id: "metal-polish", name: "Metal Polish", type: "product-type" },
                            { id: "steel-cleaner", name: "Steel Cleaner", type: "product-type" }
                        ]
                    },

                    {
                        id: "detergent-powder-bars",
                        name: "Detergent Powder & Bars",
                        type: "product-group",
                        data: [
                            { id: "washing-powder", name: "Washing Powder", type: "product-type" },
                            { id: "detergent-bar", name: "Detergent Bar", type: "product-type" },
                            { id: "fabric-whitener", name: "Fabric Whitener", type: "product-type" }
                        ]
                    },

                    {
                        id: "toilet-floor-cleaners",
                        name: "Toilet & Floor Cleaners",
                        type: "product-group",
                        data: [
                            { id: "toilet-cleaner", name: "Toilet Cleaner", type: "product-type" },
                            { id: "floor-cleaner", name: "Floor Cleaner", type: "product-type" },
                            { id: "phenyl", name: "Phenyl", type: "product-type" }
                        ]
                    },

                    {
                        id: "cleaning-tools",
                        name: "Cleaning Tools",
                        type: "product-group",
                        data: [
                            { id: "broom", name: "Broom", type: "product-type" },
                            { id: "mop", name: "Mop", type: "product-type" },
                            { id: "wiper", name: "Wiper", type: "product-type" },
                            { id: "scrub-pad", name: "Scrub Pad", type: "product-type" }
                        ]
                    },

                    {
                        id: "dishwash-bars",
                        name: "Dishwash & Bars",
                        type: "product-group",
                        data: [
                            { id: "dishwash-bar", name: "Dishwash Bar", type: "product-type" },
                            { id: "dishwash-liquid", name: "Dishwash Liquid", type: "product-type" }
                        ]
                    },

                    {
                        id: "liquid-detergents",
                        name: "Liquid Detergents",
                        type: "product-group",
                        data: [
                            { id: "front-load-liquid", name: "Front Load Liquid", type: "product-type" },
                            { id: "top-load-liquid", name: "Top Load Liquid", type: "product-type" }
                        ]
                    },

                    {
                        id: "shoe-care",
                        name: "Shoe Care",
                        type: "product-group",
                        data: [
                            { id: "shoe-polish", name: "Shoe Polish", type: "product-type" },
                            { id: "shoe-brush", name: "Shoe Brush", type: "product-type" }
                        ]
                    },

                    {
                        id: "fresheners",
                        name: "Fresheners",
                        type: "product-group",
                        data: [
                            { id: "room-freshener-spray", name: "Room Freshener Spray", type: "product-type" },
                            { id: "gel-freshener", name: "Gel Freshener", type: "product-type" }
                        ]
                    },

                    {
                        id: "machine-car-care",
                        name: "Machine & Car Care",
                        type: "product-group",
                        data: [
                            { id: "washing-machine-cleaner", name: "Washing Machine Cleaner", type: "product-type" },
                            { id: "car-shampoo", name: "Car Shampoo", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "home-lifestyles",
                name: "Home & Lifestyles",
                type: "sub-category",
                data: [

                    {
                        id: "home-decor",
                        name: "Home Decor",
                        type: "product-group",
                        data: [
                            { id: "wall-art", name: "Wall Art", type: "product-type" },
                            { id: "showpiece", name: "Showpiece", type: "product-type" },
                            { id: "photo-frame", name: "Photo Frame", type: "product-type" }
                        ]
                    },

                    {
                        id: "plants-bouquets",
                        name: "Plants & Bouquets",
                        type: "product-group",
                        data: [
                            { id: "indoor-plant", name: "Indoor Plant", type: "product-type" },
                            { id: "artificial-plant", name: "Artificial Plant", type: "product-type" },
                            { id: "flower-bouquet", name: "Flower Bouquet", type: "product-type" }
                        ]
                    },

                    {
                        id: "bedsheets-towels",
                        name: "Bedsheets & Towels",
                        type: "product-group",
                        data: [
                            { id: "single-bedsheet", name: "Single Bedsheet", type: "product-type" },
                            { id: "double-bedsheet", name: "Double Bedsheet", type: "product-type" },
                            { id: "bath-towel", name: "Bath Towel", type: "product-type" },
                            { id: "hand-towel", name: "Hand Towel", type: "product-type" }
                        ]
                    },

                    {
                        id: "gardening",
                        name: "Gardening",
                        type: "product-group",
                        data: [
                            { id: "garden-tools", name: "Garden Tools", type: "product-type" },
                            { id: "flower-seeds", name: "Flower Seeds", type: "product-type" },
                            { id: "plant-pot", name: "Plant Pot", type: "product-type" }
                        ]
                    },

                    {
                        id: "decorative-lights",
                        name: "Decorative Lights",
                        type: "product-group",
                        data: [
                            { id: "fairy-lights", name: "Fairy Lights", type: "product-type" },
                            { id: "led-strip-light", name: "LED Strip Light", type: "product-type" },
                            { id: "festival-lights", name: "Festival Lights", type: "product-type" }
                        ]
                    },

                    {
                        id: "home-needs",
                        name: "Home Needs",
                        type: "product-group",
                        data: [
                            { id: "cloth-hanger", name: "Cloth Hanger", type: "product-type" },
                            { id: "storage-box", name: "Storage Box", type: "product-type" },
                            { id: "laundry-basket", name: "Laundry Basket", type: "product-type" }
                        ]
                    },

                    {
                        id: "tissues-disposables",
                        name: "Tissues & Disposables",
                        type: "product-group",
                        data: [
                            { id: "facial-tissue", name: "Facial Tissue", type: "product-type" },
                            { id: "kitchen-towel-roll", name: "Kitchen Towel Roll", type: "product-type" },
                            { id: "paper-napkin", name: "Paper Napkin", type: "product-type" }
                        ]
                    },

                    {
                        id: "jewellery",
                        name: "Jewellery",
                        type: "product-group",
                        data: [
                            { id: "necklace", name: "Necklace", type: "product-type" },
                            { id: "earrings", name: "Earrings", type: "product-type" },
                            { id: "bracelet", name: "Bracelet", type: "product-type" }
                        ]
                    },

                    {
                        id: "innerwear",
                        name: "Innerwear",
                        type: "product-group",
                        data: [
                            { id: "mens-innerwear", name: "Men's Innerwear", type: "product-type" },
                            { id: "womens-innerwear", name: "Women's Innerwear", type: "product-type" },
                            { id: "kids-innerwear", name: "Kids Innerwear", type: "product-type" }
                        ]
                    },

                    {
                        id: "lifestyle-accessories",
                        name: "Lifestyle Accessories",
                        type: "product-group",
                        data: [
                            { id: "wallet", name: "Wallet", type: "product-type" },
                            { id: "belt", name: "Belt", type: "product-type" },
                            { id: "sunglasses", name: "Sunglasses", type: "product-type" }
                        ]
                    },

                    {
                        id: "party-festive-needs",
                        name: "Party & Festive Needs",
                        type: "product-group",
                        data: [
                            { id: "birthday-decor", name: "Birthday Decor", type: "product-type" },
                            { id: "festival-decor", name: "Festival Decor", type: "product-type" },
                            { id: "balloons", name: "Balloons", type: "product-type" }
                        ]
                    },

                    {
                        id: "socks-handkerchiefs",
                        name: "Socks & Handkerchiefs",
                        type: "product-group",
                        data: [
                            { id: "mens-socks", name: "Men's Socks", type: "product-type" },
                            { id: "womens-socks", name: "Women's Socks", type: "product-type" },
                            { id: "handkerchief", name: "Handkerchief", type: "product-type" }
                        ]
                    },

                    {
                        id: "fresheners-home",
                        name: "Fresheners",
                        type: "product-group",
                        data: [
                            { id: "room-spray", name: "Room Spray", type: "product-type" },
                            { id: "gel-freshener-home", name: "Gel Freshener", type: "product-type" },
                            { id: "automatic-diffuser", name: "Automatic Diffuser", type: "product-type" }
                        ]
                    },

                    {
                        id: "pooja-needs",
                        name: "Pooja Needs",
                        type: "product-group",
                        data: [
                            { id: "agarbatti", name: "Agarbatti", type: "product-type" },
                            { id: "diya", name: "Diya", type: "product-type" },
                            { id: "camphor", name: "Camphor", type: "product-type" }
                        ]
                    },

                    {
                        id: "bathroom-essentials",
                        name: "Bathroom Essentials",
                        type: "product-group",
                        data: [
                            { id: "soap-dispenser", name: "Soap Dispenser", type: "product-type" },
                            { id: "toothbrush-holder", name: "Toothbrush Holder", type: "product-type" },
                            { id: "shower-curtain", name: "Shower Curtain", type: "product-type" }
                        ]
                    },

                    {
                        id: "bags",
                        name: "Bags",
                        type: "product-group",
                        data: [
                            { id: "travel-bag", name: "Travel Bag", type: "product-type" },
                            { id: "school-bag", name: "School Bag", type: "product-type" },
                            { id: "handbag", name: "Handbag", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "electronics",
                name: "Electronics",
                type: "sub-category",
                data: [

                    // 🔹 Trimmers & Hair Appliances
                    {
                        id: "trimmers-hair-appliances",
                        name: "Trimmers & Hair Appliances",
                        type: "product-group",
                        data: [
                            { id: "beard-trimmer", name: "Beard Trimmer", type: "product-type" },
                            { id: "hair-trimmer", name: "Hair Trimmer", type: "product-type" },
                            { id: "hair-dryer", name: "Hair Dryer", type: "product-type" },
                            { id: "hair-straightener", name: "Hair Straightener", type: "product-type" },
                            { id: "hair-curler", name: "Hair Curler", type: "product-type" }
                        ]
                    },

                    // 🔹 Earphones & Headsets
                    {
                        id: "earphones-headsets",
                        name: "Earphones & Headsets",
                        type: "product-group",
                        data: [
                            { id: "wired-earphones", name: "Wired Earphones", type: "product-type" },
                            { id: "bluetooth-earbuds", name: "Bluetooth Earbuds", type: "product-type" },
                            { id: "neckband-earphones", name: "Neckband Earphones", type: "product-type" },
                            { id: "gaming-headset", name: "Gaming Headset", type: "product-type" }
                        ]
                    },

                    // 🔹 Speakers
                    {
                        id: "speakers",
                        name: "Speakers",
                        type: "product-group",
                        data: [
                            { id: "bluetooth-speaker", name: "Bluetooth Speaker", type: "product-type" },
                            { id: "party-speaker", name: "Party Speaker", type: "product-type" },
                            { id: "home-theatre", name: "Home Theatre", type: "product-type" }
                        ]
                    },

                    // 🔹 Mobile & Computer
                    {
                        id: "mobile-computer",
                        name: "Mobile & Computer",
                        type: "product-group",
                        data: [
                            { id: "smartphone", name: "Smartphone", type: "product-type" },
                            { id: "feature-phone", name: "Feature Phone", type: "product-type" },
                            { id: "laptop", name: "Laptop", type: "product-type" },
                            { id: "keyboard", name: "Keyboard", type: "product-type" },
                            { id: "mouse", name: "Mouse", type: "product-type" }
                        ]
                    },

                    // 🔹 Decorative Lights (Electronics)
                    {
                        id: "decorative-lights-electronics",
                        name: "Decorative Lights",
                        type: "product-group",
                        data: [
                            { id: "led-bulb", name: "LED Bulb", type: "product-type" },
                            { id: "smart-led-strip", name: "Smart LED Strip", type: "product-type" },
                            { id: "string-lights", name: "String Lights", type: "product-type" }
                        ]
                    },

                    // 🔹 Chargers & Cables
                    {
                        id: "chargers-cables",
                        name: "Chargers & Cables",
                        type: "product-group",
                        data: [
                            { id: "mobile-charger", name: "Mobile Charger", type: "product-type" },
                            { id: "fast-charger", name: "Fast Charger", type: "product-type" },
                            { id: "usb-cable", name: "USB Cable", type: "product-type" },
                            { id: "type-c-cable", name: "Type C Cable", type: "product-type" },
                            { id: "hdmi-cable", name: "HDMI Cable", type: "product-type" }
                        ]
                    },

                    // 🔹 Smart Watches
                    {
                        id: "smart-watches",
                        name: "Smart Watches",
                        type: "product-group",
                        data: [
                            { id: "fitness-band", name: "Fitness Band", type: "product-type" },
                            { id: "bluetooth-calling-watch", name: "Bluetooth Calling Watch", type: "product-type" },
                            { id: "kids-smartwatch", name: "Kids Smartwatch", type: "product-type" }
                        ]
                    },

                    // 🔹 Kitchen Appliances
                    {
                        id: "kitchen-appliances",
                        name: "Kitchen Appliances",
                        type: "product-group",
                        data: [
                            { id: "mixer-grinder", name: "Mixer Grinder", type: "product-type" },
                            { id: "electric-kettle", name: "Electric Kettle", type: "product-type" },
                            { id: "induction-cooktop", name: "Induction Cooktop", type: "product-type" },
                            { id: "microwave-oven", name: "Microwave Oven", type: "product-type" }
                        ]
                    },

                    // 🔹 Batteries
                    {
                        id: "batteries",
                        name: "Batteries",
                        type: "product-group",
                        data: [
                            { id: "aa-battery", name: "AA Battery", type: "product-type" },
                            { id: "aaa-battery", name: "AAA Battery", type: "product-type" },
                            { id: "rechargeable-battery", name: "Rechargeable Battery", type: "product-type" }
                        ]
                    },

                    // 🔹 Extension Cables & Accessories
                    {
                        id: "extension-cables-accessories",
                        name: "Extension Cables & Accessories",
                        type: "product-group",
                        data: [
                            { id: "extension-board", name: "Extension Board", type: "product-type" },
                            { id: "spike-guard", name: "Spike Guard", type: "product-type" },
                            { id: "power-strip", name: "Power Strip", type: "product-type" }
                        ]
                    },

                    // 🔹 Home Appliances
                    {
                        id: "home-appliances",
                        name: "Home Appliances",
                        type: "product-group",
                        data: [
                            { id: "iron", name: "Iron", type: "product-type" },
                            { id: "room-heater", name: "Room Heater", type: "product-type" },
                            { id: "ceiling-fan", name: "Ceiling Fan", type: "product-type" },
                            { id: "air-cooler", name: "Air Cooler", type: "product-type" }
                        ]
                    },

                    // 🔹 Music Instruments & Accessories
                    {
                        id: "music-instruments-accessories",
                        name: "Music Instruments & Accessories",
                        type: "product-group",
                        data: [
                            { id: "guitar", name: "Guitar", type: "product-type" },
                            { id: "keyboard-instrument", name: "Keyboard Instrument", type: "product-type" },
                            { id: "tabla", name: "Tabla", type: "product-type" },
                            { id: "guitar-strings", name: "Guitar Strings", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "stationary-games",
                name: "Stationary & Games",
                type: "sub-category",
                data: [

                    // 🔹 Notebooks & Diaries
                    {
                        id: "notebooks-diaries",
                        name: "Notebooks & Diaries",
                        type: "product-group",
                        data: [
                            { id: "ruled-notebook", name: "Ruled Notebook", type: "product-type" },
                            { id: "plain-notebook", name: "Plain Notebook", type: "product-type" },
                            { id: "spiral-notebook", name: "Spiral Notebook", type: "product-type" },
                            { id: "personal-diary", name: "Personal Diary", type: "product-type" }
                        ]
                    },

                    // 🔹 Pens & Pencils
                    {
                        id: "pens-pencils",
                        name: "Pens & Pencils",
                        type: "product-group",
                        data: [
                            { id: "ball-pen", name: "Ball Pen", type: "product-type" },
                            { id: "gel-pen", name: "Gel Pen", type: "product-type" },
                            { id: "ink-pen", name: "Ink Pen", type: "product-type" },
                            { id: "pencil", name: "Pencil", type: "product-type" },
                            { id: "mechanical-pencil", name: "Mechanical Pencil", type: "product-type" }
                        ]
                    },

                    // 🔹 Toys & Games
                    {
                        id: "toys-games",
                        name: "Toys & Games",
                        type: "product-group",
                        data: [
                            { id: "board-game", name: "Board Game", type: "product-type" },
                            { id: "remote-control-toy", name: "Remote Control Toy", type: "product-type" },
                            { id: "puzzle-game", name: "Puzzle Game", type: "product-type" },
                            { id: "educational-toy", name: "Educational Toy", type: "product-type" },
                            { id: "action-figure", name: "Action Figure", type: "product-type" }
                        ]
                    },

                    // 🔹 Glue & Tape
                    {
                        id: "glue-tape",
                        name: "Glue & Tape",
                        type: "product-group",
                        data: [
                            { id: "white-glue", name: "White Glue", type: "product-type" },
                            { id: "fevicol", name: "Adhesive Glue", type: "product-type" },
                            { id: "cellotape", name: "Cellotape", type: "product-type" },
                            { id: "double-sided-tape", name: "Double Sided Tape", type: "product-type" }
                        ]
                    },

                    // 🔹 Books & Magazines
                    {
                        id: "books-magazines",
                        name: "Books & Magazines",
                        type: "product-group",
                        data: [
                            { id: "novel", name: "Novel", type: "product-type" },
                            { id: "competitive-exam-book", name: "Competitive Exam Book", type: "product-type" },
                            { id: "monthly-magazine", name: "Monthly Magazine", type: "product-type" }
                        ]
                    },

                    // 🔹 School Needs
                    {
                        id: "school-needs",
                        name: "School Needs",
                        type: "product-group",
                        data: [
                            { id: "geometry-box", name: "Geometry Box", type: "product-type" },
                            { id: "school-bottle", name: "School Bottle", type: "product-type" },
                            { id: "lunch-box-school", name: "Lunch Box (School)", type: "product-type" }
                        ]
                    },

                    // 🔹 Children's Book
                    {
                        id: "childrens-book",
                        name: "Children's Book",
                        type: "product-group",
                        data: [
                            { id: "story-book", name: "Story Book", type: "product-type" },
                            { id: "coloring-book", name: "Coloring Book", type: "product-type" },
                            { id: "activity-book", name: "Activity Book", type: "product-type" }
                        ]
                    },

                    // 🔹 Art & Crafts
                    {
                        id: "art-crafts",
                        name: "Art & Crafts",
                        type: "product-group",
                        data: [
                            { id: "crayons", name: "Crayons", type: "product-type" },
                            { id: "water-colors", name: "Water Colors", type: "product-type" },
                            { id: "sketch-pen", name: "Sketch Pen", type: "product-type" },
                            { id: "craft-paper", name: "Craft Paper", type: "product-type" }
                        ]
                    },

                    // 🔹 Files & Office Needs
                    {
                        id: "files-office-needs",
                        name: "Files & Office Needs",
                        type: "product-group",
                        data: [
                            { id: "office-file", name: "Office File", type: "product-type" },
                            { id: "clipboard", name: "Clipboard", type: "product-type" },
                            { id: "stapler", name: "Stapler", type: "product-type" },
                            { id: "paper-punch", name: "Paper Punch", type: "product-type" }
                        ]
                    },

                    // 🔹 Gift Wraps & Bags
                    {
                        id: "gift-wraps-bags",
                        name: "Gift Wraps & Bags",
                        type: "product-group",
                        data: [
                            { id: "gift-wrapper", name: "Gift Wrapper", type: "product-type" },
                            { id: "gift-bag", name: "Gift Bag", type: "product-type" },
                            { id: "ribbon", name: "Ribbon", type: "product-type" }
                        ]
                    },

                    // 🔹 Sports & Gym
                    {
                        id: "sports-gym",
                        name: "Sports & Gym",
                        type: "product-group",
                        data: [
                            { id: "cricket-bat", name: "Cricket Bat", type: "product-type" },
                            { id: "football", name: "Football", type: "product-type" },
                            { id: "badminton-racket", name: "Badminton Racket", type: "product-type" },
                            { id: "yoga-mat", name: "Yoga Mat", type: "product-type" },
                            { id: "dumbbells", name: "Dumbbells", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "kitchen-dining",
                name: "Kitchen & Dining",
                type: "sub-category",
                data: [

                    // 🔹 Pressure Cooker
                    {
                        id: "pressure-cooker",
                        name: "Pressure Cooker",
                        type: "product-group",
                        data: [
                            { id: "aluminium-pressure-cooker", name: "Aluminium Pressure Cooker", type: "product-type" },
                            { id: "stainless-steel-pressure-cooker", name: "Stainless Steel Pressure Cooker", type: "product-type" },
                            { id: "induction-pressure-cooker", name: "Induction Base Cooker", type: "product-type" },
                            { id: "mini-pressure-cooker", name: "Mini Pressure Cooker", type: "product-type" }
                        ]
                    },

                    // 🔹 Cookware Set
                    {
                        id: "cookware-set",
                        name: "Cookware Set",
                        type: "product-group",
                        data: [
                            { id: "nonstick-cookware", name: "Nonstick Cookware Set", type: "product-type" },
                            { id: "stainless-cookware", name: "Stainless Cookware Set", type: "product-type" },
                            { id: "hard-anodized-set", name: "Hard Anodized Set", type: "product-type" },
                            { id: "cast-iron-set", name: "Cast Iron Set", type: "product-type" }
                        ]
                    },

                    // 🔹 Bottles & Flask
                    {
                        id: "bottles-flask",
                        name: "Bottles & Flask",
                        type: "product-group",
                        data: [
                            { id: "steel-water-bottle", name: "Steel Water Bottle", type: "product-type" },
                            { id: "plastic-water-bottle", name: "Plastic Water Bottle", type: "product-type" },
                            { id: "thermos-flask", name: "Thermos Flask", type: "product-type" },
                            { id: "insulated-bottle", name: "Insulated Bottle", type: "product-type" }
                        ]
                    },

                    // 🔹 Gas Stove & Accessories
                    {
                        id: "gas-stove-accessories",
                        name: "Gas Stove & Accessories",
                        type: "product-group",
                        data: [
                            { id: "2-burner-gas-stove", name: "2 Burner Gas Stove", type: "product-type" },
                            { id: "3-burner-gas-stove", name: "3 Burner Gas Stove", type: "product-type" },
                            { id: "gas-lighter", name: "Gas Lighter", type: "product-type" },
                            { id: "gas-pipe-regulator", name: "Gas Pipe & Regulator", type: "product-type" }
                        ]
                    },

                    // 🔹 Kitchen Aids
                    {
                        id: "kitchen-aids",
                        name: "Kitchen Aids",
                        type: "product-group",
                        data: [
                            { id: "vegetable-chopper", name: "Vegetable Chopper", type: "product-type" },
                            { id: "hand-blender", name: "Hand Blender", type: "product-type" },
                            { id: "grater-peeler", name: "Grater & Peeler", type: "product-type" },
                            { id: "kitchen-scissors", name: "Kitchen Scissors", type: "product-type" }
                        ]
                    },

                    // 🔹 Kitchen Storage
                    {
                        id: "kitchen-storage",
                        name: "Kitchen Storage",
                        type: "product-group",
                        data: [
                            { id: "storage-container", name: "Storage Container", type: "product-type" },
                            { id: "masala-box", name: "Masala Box", type: "product-type" },
                            { id: "grain-storage-drum", name: "Grain Storage Drum", type: "product-type" },
                            { id: "oil-dispenser", name: "Oil Dispenser", type: "product-type" }
                        ]
                    },

                    // 🔹 Tableware & More
                    {
                        id: "tableware-more",
                        name: "Tableware & More",
                        type: "product-group",
                        data: [
                            { id: "dinner-set", name: "Dinner Set", type: "product-type" },
                            { id: "serving-bowl", name: "Serving Bowl", type: "product-type" },
                            { id: "plates", name: "Plates", type: "product-type" },
                            { id: "cutlery-set", name: "Cutlery Set", type: "product-type" }
                        ]
                    },

                    // 🔹 Steel Utensils
                    {
                        id: "steel-utensils",
                        name: "Steel Utensils",
                        type: "product-group",
                        data: [
                            { id: "steel-plate", name: "Steel Plate", type: "product-type" },
                            { id: "steel-glass", name: "Steel Glass", type: "product-type" },
                            { id: "steel-kadhai", name: "Steel Kadhai", type: "product-type" },
                            { id: "steel-pan", name: "Steel Pan", type: "product-type" }
                        ]
                    },

                    // 🔹 Lunch Boxes
                    {
                        id: "lunch-boxes",
                        name: "Lunch Boxes",
                        type: "product-group",
                        data: [
                            { id: "steel-lunch-box", name: "Steel Lunch Box", type: "product-type" },
                            { id: "plastic-lunch-box", name: "Plastic Lunch Box", type: "product-type" },
                            { id: "insulated-lunch-box", name: "Insulated Lunch Box", type: "product-type" }
                        ]
                    },

                    // 🔹 Kitchen Tools
                    {
                        id: "kitchen-tools",
                        name: "Kitchen Tools",
                        type: "product-group",
                        data: [
                            { id: "knife-set", name: "Knife Set", type: "product-type" },
                            { id: "rolling-pin", name: "Rolling Pin (Belan)", type: "product-type" },
                            { id: "tongs", name: "Tongs (Chimta)", type: "product-type" },
                            { id: "ladle-spoon", name: "Ladle & Spoon", type: "product-type" }
                        ]
                    },

                    // 🔹 Drinkware & Bar
                    {
                        id: "drinkware-bar",
                        name: "Drinkware & Bar",
                        type: "product-group",
                        data: [
                            { id: "wine-glass", name: "Wine Glass", type: "product-type" },
                            { id: "beer-mug", name: "Beer Mug", type: "product-type" },
                            { id: "cocktail-shaker", name: "Cocktail Shaker", type: "product-type" },
                            { id: "bar-accessories", name: "Bar Accessories", type: "product-type" }
                        ]
                    }

                ]
            },
            {
                id: "pet-care",
                name: "Pet Care",
                type: "sub-category",
                data: [

                    // 🔹 Cat Food
                    {
                        id: "cat-food",
                        name: "Cat Food",
                        type: "product-group",
                        data: [
                            { id: "dry-cat-food", name: "Dry Cat Food", type: "product-type" },
                            { id: "wet-cat-food", name: "Wet Cat Food", type: "product-type" },
                            { id: "kitten-food", name: "Kitten Food", type: "product-type" },
                            { id: "grain-free-cat-food", name: "Grain Free Cat Food", type: "product-type" }
                        ]
                    },

                    // 🔹 Dog Food
                    {
                        id: "dog-food",
                        name: "Dog Food",
                        type: "product-group",
                        data: [
                            { id: "dry-dog-food", name: "Dry Dog Food", type: "product-type" },
                            { id: "wet-dog-food", name: "Wet Dog Food", type: "product-type" },
                            { id: "puppy-food", name: "Puppy Food", type: "product-type" },
                            { id: "grain-free-dog-food", name: "Grain Free Dog Food", type: "product-type" },
                            { id: "breed-specific-dog-food", name: "Breed Specific Dog Food", type: "product-type" }
                        ]
                    },

                    // 🔹 Pet Treat & Toys
                    {
                        id: "pet-treat-toys",
                        name: "Pet Treat & Toys",
                        type: "product-group",
                        data: [
                            { id: "dog-treats", name: "Dog Treats", type: "product-type" },
                            { id: "cat-treats", name: "Cat Treats", type: "product-type" },
                            { id: "chew-toys", name: "Chew Toys", type: "product-type" },
                            { id: "rope-toys", name: "Rope Toys", type: "product-type" },
                            { id: "interactive-toys", name: "Interactive Toys", type: "product-type" }
                        ]
                    },

                    // 🔹 Pet Grooming
                    {
                        id: "pet-grooming",
                        name: "Pet Groomings",
                        type: "product-group",
                        data: [
                            { id: "pet-shampoo", name: "Pet Shampoo", type: "product-type" },
                            { id: "tick-flea-treatment", name: "Tick & Flea Treatment", type: "product-type" },
                            { id: "pet-brush-comb", name: "Pet Brush & Comb", type: "product-type" },
                            { id: "nail-clipper", name: "Pet Nail Clipper", type: "product-type" },
                            { id: "pet-perfume", name: "Pet Perfume", type: "product-type" }
                        ]
                    }

                ]
            }
        ]
    }
]