

function ClozeCards (text, cloze) {
    this.cloze = cloze;
    this.text = text;
    this.partialText = text.replace(cloze, "....");

}



module.exports = ClozeCards;