from engine.entities.state import State as EngineState
from .round import Round
from .phase import Phase


class State(EngineState):
    def __init__(self):
        self._round = Round()
        self._phase = Phase()
        super().__init__(self._round, self._phase)

