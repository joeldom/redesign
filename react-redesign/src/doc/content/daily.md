<style>
        :root {
            /* BEYOND */
            --black: #0a0c0e;
            --euphoria: #00050f;
            --very-dark-blue: #000e4e;
            --dark-blue: #001c9b;
            --brand-blue: #1a3acc;
            --dark-olive: #1a1e1c;
            --deep-green: #0a202e;
            --ever-green: #142a2d;
            --deep-root: #004161;
            --mint: #2e8c5f;
            --legacy: #008080;
            --java: #1accab;
            --bright-green: #14e158;
            --safety-green: #bbff32;
            --dim-red: #ee0202;
            --orange: #ff6f3f;
            --bright-orange: rgba(255, 111, 63, 0.5);
            --blood-red: #600000;
            --magenta: #ab1acc;
            --fuchsia: #84017e;
            --metal: #5a6771;
            --medium-grey: #c4c4c4;
            --light-grey: #cfcfcf;
            --golden: #ccab1a;
            --burlywood: #deb887;
            --warm-grey: #818181;
            --dark-grey: #767676;
            --pale-olive: #648476;
            --pale-blue: #a6aaf4;
            --cool-grey: #a3a3a3;
            --off-white: #e4dfd9;
            --rosy-pink: #f7f2fb;
            --bright-grey: #f2f2f2;
            --base-bright: #f0f4f7;
            --cool-blue: #e0e9fe;
            --warm-black: #2d2828;
            --white: #ffffff;

            /*resets*/
            --primary-color: var(--brand-blue);
            --secondary-color: var(--black);
            --neutral-color: #333;
            --default-color: var(--warm-grey);
            --bright-color: var(--bright-grey);
            --dark-color: var(--dark-olive);

            /* properties */
            --font-size-base: 14px;
            --font-size-small: 12px;
            --font-size-tiny: 10px;
            --font-size-micro: 8px;
            --spacing-unit: 8px;
        }

        body {
            font-size: var(--font-size-base);
            color: var(--bright-color);
            margin: var(--spacing-unit);
            font-family: Arial, sans-serif;
        }

        h1 {
            color: var(--primary-color);
            margin-bottom: calc(var(--spacing-unit) * 2);
        }

        .button {
            background-color: var(--secondary-color);
            color: white;
            padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
            border: none;
            border-radius: calc(var(--spacing-unit) / 2);
            cursor: pointer;
        }

        .button:hover {
            background-color: var(--primary-color);
        }
        .label{
            background-color: var(--secondary-color);
            font-size: calc(var(--spacing-unit) * 1.5);
            font-weight: 100;
            color: var(--default-color);
            padding: calc(var(--spacing-unit) * .25) calc(var(--spacing-unit) * .5);
            border: 1px solid var(--default-color);
            border-radius: var(--spacing-unit);
            cursor: pointer;
        }
        .label:hover{
            background-color: var(--ever-green);
            color: white !important;
            border: 1px solid white;
        }
        .life{
            color: var(--java);
            border-color: var(--java);
        }
        .urgent{
            color: var(--orange);
            border-color: var(--orange);
        }

    </style>

# TAO

### Task Index

A "label" index to be used in a to-do list that serves as a brief marker used to categorize or prioritize tasks, offering a quick visual reference for organization. The `label` class is added to a word, further indexing the item with others life it. To use a label add `<span class="label">Basic</span>` to an item, and chose the type with given styles. Types of labels are `clean, cook, bills, chores, work`.



### Index Test
<span class="label">Basic</span>
<span class="label life">Life</span>
<span class="label urgent">βετα</span>

|                                   type | details   |
| -------------------------------------: | :-------- |
|       <span class="label">Basic</span> | something |
| <span class="label urgent">βετα</span> | else      |
|   <span class="label life">Life</span> | Fasting   |


## Day 5.1.2024
- Rent out

## Week June 3
- Paypal Resume
- MS Resume
- Trash (cardboard)
- color lib file sass/css

## Week June 10
- Trash (cans)

## Month June 2024
- Office reorg/clean present
- landing page cleaned up

## Other
- Find Breya MTG CMD Deck
- Build Pantry Shelves
- Jeep Reg
- Jeep Inspection
- Build Dresser
- clean keyboard
- more
