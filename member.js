function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/skillsMember.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}

