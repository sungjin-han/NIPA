`<head>` 태그 내에 `<script>` 태그가 존재하고, 이곳에서 `document.getElementsByTagName("li")`를 이용해 문서 내의 모든 `<li>` 요소를 선택하고 있다는 것을 확인할 수 있습니다.
그런데, 이러한 JavaScript 코드는 웹 브라우저가 HTML 문서를 읽는 순서에 따라 실행되는데, 이때 문서의 `<head>` 태그는 `<body>` 태그보다 먼저 읽히기 때문에, `<head>` 내의 `<script>` 태그에서는 아직 `<body>` 내의 요소들이 로드되지 않은 상태입니다.
즉, 위 코드에서 `<head>` 내의 `<script>` 태그 내에서 `document.getElementsByTagName("li")`를 호출하면, 이 시점에서는 아직 `<body>` 내의 `<li>` 태그들이 로드되지 않았기 때문에, 이들을 선택할 수 없게 됩니다.
그럼에도 불구하고 `console.log(selectedItem)`을 통해 개발자 도구를 확인해보면 `selectedItem`이 선택된 것처럼 보이는 이유는, `document.getElementsByTagName` 메서드가 반환하는 것이 '실시간' 노드 리스트인 `HTMLCollection`이기 때문입니다. 
`HTMLCollection`은 실시간으로 문서의 변화를 반영하기 때문에, 코드가 실행된 시점에서는 아직 로드되지 않았더라도, 개발자 도구에서 해당 변수를 확인하는 시점에는 이미 `<li>` 태그들이 로드되어 있어서 이를 반영하게 됩니다.
그러므로, `<body>` 내의 요소들을 JavaScript 코드에서 조작하고자 한다면, 그 코드는 `<body>` 태그 내부에 위치하거나, 또는 `window.onload`와 같은 이벤트 리스너를 통해 모든 요소가 로드된 이후에 실행되도록 하는 것이 좋습니다. 이를 통해 원하는 요소들이 정확히 로드되었음을 보장받을 수 있습니다. 
이 점은 웹 개발에서 매우 중요한 부분이며, JavaScript를 이용해 웹페이지를 조작할 때 반드시 고려해야 하는 부분입니다.
