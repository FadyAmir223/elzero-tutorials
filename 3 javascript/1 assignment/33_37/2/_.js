let num1 = 9;
let str = "9";
let str2 = "20";

type_value(str, num1);

function type_value (x, y) {
    if (x == y) { // value ==
        console.log("{num1} Is The Same Value As {str}");
        if (typeof x !== typeof y) { // type !=
            console.log("{num1} Is The Same Value As {str} But Not The Same Type");
        }
    }
    else { // value !=
        if (typeof x !== typeof y) { // type !=
            console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
        }
        else { // type ==
            console.log("{str} Is The Same Type As {str2} But Not The Same Value");
        }
    }
}
