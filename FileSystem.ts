import Folder from './Folder';

class FileSystem extends Folder {
    constructor(name) {
        super(name);
    }

    clone(): FileSystem { // Добавить :FileSystem просто пока выпадает ошибка
        let clone_fs = new FileSystem(this.name);
        //clone_fs.composition = this.composition; //так скопируются только ссылки на обьекты, а не сам обьект
        Object.assign(clone_fs.composition, this.composition); //вопрос, в том будут ли клонированнные обьекты соответствовать классам изначального? И произойдет ли глубокое клонирование
        return clone_fs;
    }
    
}