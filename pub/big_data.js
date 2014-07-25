var BD
(function () {
function mkt(variants) { return '#{' + variants.join('#') + '}' }
function rnd(from, to) { return from + (Math.random() * (1+to-from)|0) }
// lowercase first letter mkt()
function lc1mkt(xs) { return mkt(xs.map(function (x) {
    return x[0].toLowerCase()+x.substr(1) })) }

var from_city = mkt([
    "Мурманска",
    "Москвы",
    "Омска",
    "Киева",
    "Донецка",
    "Луганска",
    "Одессы",
    "Новосибирска",
    "Новороссийска",
    "Владивостока",
    "Минска",
    "Волгограда",
    "Ставрополя",
    "Биробиджана",
    "Сыктывкара",
    "антарктической базы Дружная-1"
])

var to_city = mkt([
    "Мурманск",
    "Москву",
    "Омск",
    "Киев",
    "Донецк",
    "Луганск",
    "Одессу",
    "Новосибирск",
    "Новороссийск",
    "Минск",
    "Волгоград",
    "Мариуполь",
    "Биробиджан"
])

var from_country = mkt([
    "России",
    "Украины",
    "Израиля",
    "Чехословакии",
    "Палестинской автономии",
    "Латвии",
    "Германии",
    "Северной Кореи",
    "Южной Кореи",
    "Внутренного Тибета",
    "Республики Конго",
    "очередной Банановой Республики"
])

var national = mkt([
    "Российский",
    "Украинский",
    "Китайский",
    "Чеченский",
    "Палестинский",
    "Американский",
    "Северокорейский",
    "Новозеландский",
    "Японский"
])

var national_plural = mkt([
    "Российские",
    "Украинские",
    "Китайские",
    "Палестинские",
    "Американские",
    "Северокорейские",
    "Эстонские",
    "Новозеландские"
])

var where_politics = mkt([
    "Верховной Раде",
    "Госдуме",
    "Кремлевском Дворце съездов",
    "Белом доме",
    "областной администрации "+from_city,
    "управлении по делам молодежи администрации города "+from_city,
    "ГУЛАГе"
])

var airport = mkt([
    "Пулково",
    "Домодедово",
    "Шереметьево"
])

var where_hole = mkt([
    "Туркменистане",
    "Таджикистане",
    "Казахстане",
    "Индонезии",
    "Намибии"
])

var stuffed_toy_of = mkt([
    "Иисуса",
    "Ленина",
    "Каддафи",
    "Нельсона Манделлу",
    "Зигмунда Фрейда",
    "Далай Ламу"
])

var stuffed_toy = "чучело "+stuffed_toy_of

var object_act_on = mkt([
    "борщ",
    "сало",
    "мацу",
    "айфон",
    "пирожок",
    "вермишель",
    "бидон молока",
    "банку сгущенки",
    "крейсер «Аврора»",
    "спутник Глонасс-М",
    stuffed_toy
])

var did_action_object = mkt([
    "сожгли "+object_act_on,
    "съели детей",
    "погладили кота",
    "изнасиловали "+object_act_on,
    "воскресили "+stuffed_toy_of,
    "осквернили святыни",
    "похитили иконы"
])

var crippled = mkt([
    "бездомных",
    "безумных",
    "бесстрашных",
    "безобразных",
    "безработных",
    "безногих",
    "безблагодатных",
    "бестелесных"
])

var ministry_of = mkt([
    "обороны",
    "спорта",
    "сельского хозяйства",
    "культуры",
    "внутренних дел",
    "иностранных дел",
    "здравоохранения",
    "промышленности и торговли",
    "образования и науки",
    "финансов",
    "правды"
])

var unrelated_word = mkt([
    "портянки",
    "шкварки",
    "баклуши",
    "провербиальный",
    "мультифора",
    "квадрига",
    "лапти",
    "посконный",
    "сермяжный"
])

var do_stuff = mkt([
    "повысить зарплату",
    "воскресить "+stuffed_toy_of,
    "погладить кота",
    "выкопать картошку",
    "вывести на стационарную орбиту "+object_act_on,
    "забыть слово "+unrelated_word
])

var out_from = mkt([
    "поезда",
    "автобуса",
    "вагона метро",
    "моторного дельтаплана",
    "сраного трактора",
    "собачьей упряжки",
    "трамвая",
    "самолета",
    "подводной лодки"
])

var where_biome = mkt([
    "тайге",
    "тундре",
    "степи",
    "лесостепи",
    "саванне",
    "тонкому льду",
    "спальному району",
    "битому стеклу",
    "садовому кольцу"
])

var profession = mkt([
    "космонавт",
    "партизан",
    "министр "+ministry_of,
    "домовой",
    "саванный шимпанзе"
])

var crafted = mkt([
    "айфон",
    "мусоровоз",
    "боевой лазер",
    "атомный ледокол",
    "спутник Глонасс-М",
    "моторный дельтаплан",
    "Храм Христа Спасителя"
])


var raw_person = [
    "Патриарх Московский и всея Руси Кирилл",
    "Великий русский писатель Александр Сергеевич Пушкин",
    "Исламский пророк Мухаммад",
    "Князь тьмы Сатана",
    "Депутат «Справедливой России» Олег Пахолков",
    // TODO: needs sex change
    // "Канцлер Германии Ангела Меркель",
    "Генеральный директор Первого канала Константин Эрнст"
]

var person = mkt(raw_person)
var lc1person = lc1mkt(raw_person)

var person_generic = mkt([
    national+" "+profession,
    person
])

var imbecile_generic = mkt([
    "Б-г",
    profession,
    lc1person
])

var abs_quality = mkt([
    "святость",
    "духовность",
    "мерзость",
    "глупость",
    "массовость",
    "алчность",
    "коммутативность",
    "компланарность",
    "невостребованность",
    "застенчивость",
    "соборность",
    "державность",
    "народность"
])

var bbpe = mkt([
    "пенсионерку",
    "революционерку",
    "канонерку",
    "феминистку",
    "морскую свинку"
])

var hit_with = mkt([
    "топором",
    "прикладом",
    "боевым топором",
    "мусорным баком",
    "ногой с разворота",
    "гаечным ключом 24 на 30"
])

var innocent_attrib = mkt([
    "осуждающий взгляд",
    "болезненный вид"
])

var cap_enemies = mkt([
    "Националисты",
    "Исламисты",
    "Фундаменталисты",
    "Ополченцы",
    "Черепашки-ниндзя",
    "Сепаратисты",
    "Котики"
])

var national_attrib = mkt([
    "письменность",
    "духовность",
    "коммутативность",
    "компланарность",
    "школьная программа",
    "гравитация",
    "Новая Зеландия"
])

var seeking_refuge = mkt([
    "украинцев",
    "африканцев",
    "исламистов",
    "фундаменталистов",
    "ополченцев"
])

var give_out_to = mkt([
    "миграционную службу",
    "пункт приема металлолома",
    "поликлинику для опытов",
    "приют для бездомных животных"
])

var without_class = mkt([
    "духовенства",
    "дворянства",
    "профсоюза",
    "Аллаха",
    "Сатаны"
])

BD = [
    function () {
        return "В "+where_politics+" нашли "+rnd(10, 20)+" "+crippled+" депутатов" },
    "В "+airport+" у пассажиров из "+from_city+" отобрали и "+did_action_object,
    function () {
        return "Министр "+ministry_of+" "+from_country+" потребовал забыть слово "+
            unrelated_word+" к концу "+rnd(2014, 2020)+" года" },
    "Мизулина обвинила "+object_act_on+" в развратных действиях против детей",
    "В "+to_city+" привезли святыню, которая поможет "+do_stuff,
    function () {
        return "Выпавший из "+out_from+" пассажир пробежал "+rnd(10, 20)+
            " километров по "+where_biome },
    person_generic+" нашел себе работу поинтереснее",
    national_plural+" умельцы собрали из мусора "+crafted,
    person+" назвал "+abs_quality+" идеалом русского народа",
    "Жительница "+from_city+" ударила "+bbpe+" "+hit_with+" за "+innocent_attrib,
    national+" "+profession+" насчитал в плену у ополченцев "+rnd(10, 40)+"0 человек",
    cap_enemies+" "+did_action_object+" в православном храме "+from_city,
    "В "+where_hole+" в рамках возрождения национальной культуры отменена "+national_attrib,
    "По сообщениям МИД РФ, "+lc1person+" съебал из сраной Рашки, спиздив сраный "+crafted,
    "ФМС: Мурманчане приглашают к себе "+seeking_refuge+", а потом сдают в "+give_out_to,
    "В одном из храмов "+from_country+" снимали порнографию без разрешения "+without_class,
    "Голый мужчина в центре "+from_city+" доказывал прохожим, что он "+imbecile_generic,
    "Сотни "+seeking_refuge+" ищут "+give_out_to+" для совершения обряда во славу "+without_class,
    "Житель "+from_city+" призвал "+do_stuff+" ради спасения "+crippled+" "+seeking_refuge,
    cap_enemies+" "+from_country+" на молодежном политическом форуме Селигер "+rnd(10, 20)+" раз "+did_action_object
]
}())