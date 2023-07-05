from engine.entities.card import Card as EngineCard


class Card(EngineCard):
    def __init__(self,
                 house_name: str,
                 leader_name: str,
                 combat_strength: int,
                 text_ability: str,
                 sword_icons_num: int,
                 fortification_icons_num: int):
        self._leader_name = leader_name
        self._combat_strength = combat_strength
        self._text_ability = text_ability
        self._sword_icons_num = sword_icons_num
        self._fortification_icons_num = fortification_icons_num
