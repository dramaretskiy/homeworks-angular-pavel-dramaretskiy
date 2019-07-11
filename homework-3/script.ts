// Домашнее задание:

// Создать класс User у которого будут поля name, age, achivments
// Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
// Создать класс Achivement в котором будут следующие поля type, heroical, description
// Поместить данные класс в неймспейс SuperHero

// Создать инстансты классов - SpiderMan и IronMan
// + Создать базовые интерфейсы для классов User и Achivement.

namespace SuperHero {
  export interface AchievementInterface {
    type: string;
    heroical: boolean;
    description: string;
  }

  export class Achievement implements AchievementInterface {
    type: string;
    heroical: boolean;
    description: string;
  }

  export interface UserInterface {
    name: string;
    age: number;
    achievements: AchievementInterface[];

    addYearOfLife(number: number): void;
    addAchievement(achievement: AchievementInterface): void;
  }

  export class User implements UserInterface {
    name: string;
    age: number;
    achievements: AchievementInterface[] = [];

    addYearOfLife(number: number): number {
      return (this.age += number);
    }
    addAchievement(achievement: AchievementInterface): void {
      this.achievements.push(achievement);
    }
  }
}

const achievementFirst: SuperHero.Achievement = {
  type: "First type",
  heroical: true,
  description: "First description"
};

const achievementSecond: SuperHero.Achievement = {
  type: "Second type",
  heroical: true,
  description: "Second description"
};

const spiderMan = new SuperHero.User();

spiderMan.name = "Spaidik";
spiderMan.age = 27;
spiderMan.addAchievement(achievementFirst);
spiderMan.addAchievement(achievementSecond);

const ironMan = new SuperHero.User();

ironMan.name = "Piece of iron";
ironMan.age = 27;
ironMan.addAchievement(achievementFirst);
ironMan.addAchievement(achievementSecond);
