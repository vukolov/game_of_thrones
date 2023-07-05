from engine.entities.phase import Phase as EnginePhase


class Phase(EnginePhase):
    WESTEROS_PHASE = 'Westeros Phase'
    PLANNING_PHASE = 'Planning Phase'
    ACTION_PHASE = 'Action Phase'

    def __init__(self):
        super().__init__()
        self._number = 1
