from engine.entities.player import Player as EnginePlayer


class Player(EnginePlayer):
    def __init__(self, login: str, name: str):
        super().__init__(login, name)
