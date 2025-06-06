window.initializeCanvas = function () {
    // Configura��es globais
    const config = {
        orientation: 'vertical',
        nodeWidth: 180,
        nodeHeight: 70,
        minHorizontalSpacing: 50,
        verticalSpacing: 100,
        card: {
            isVacant: {
                fill: '#e04f60',
                text: "Clique aqui para preencher a posi��o",
            },
            fill: {
                'PlatformManager': '#cc092f',
                'ManagementManager': '#e03c50',
                'RelationshipManager': '#e03c50',
                'Assistant': '#e03c50',
                'Diff': '#e04f60'
            },
            textColor: '#fff'
        },
        lineColor: '#7f8c8d',
        lineWidth: 2,
        isHub: {
            strokeColor: '#2ecc71',
            strokeWidth: 3
        },
        addButton: {
            size: 20,
            lineLength: 30,
            strokeColor: 'black',
            backGround: {
                hover: '#dee2e6',
                natural: 'transparent'
            },
            icon: {
                fill: 'black',
                align: 'center',
                text: '\uF4FE',
                fontSize: 18,
                fontFamily: 'bootstrap-icons'
            }
        }
    };

    const orgData = {
        Name: "Carlos",
        Role: "PlatformManager",
        Function: { ID: 1, ParentID: 0 },
        Subordinates: [
            {
                Name: "Ana",
                Role: "ManagementManager",
                Hub: true,
                HubName: "Bradesco Prime SP",
                Function: { ID: 2, ParentID: 1 },
                Subordinates: [
                    {
                        Name: "Bruno",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime SP",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: []
                    },
                    {
                        Name: "Richard",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime SP",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Diana",
                                Role: "Assistant",
                                Hub: true,
                                HubName: "Bradesco Prime SP",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "Mariana",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime SP",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: []
                    }
                ]
            },
            {
                Name: "Pedro",
                Role: "ManagementManager",
                Hub: false,
                HubName: "",
                Function: { ID: 2, ParentID: 1 },
                Subordinates: [
                    {
                        Name: "Paula",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: []
                    },
                    {
                        Name: "Roberto",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Heitor",
                                Role: "Assistant",
                                Hub: false,
                                HubName: "",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "Geregotango",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Erick",
                                Role: "Assistant",
                                Hub: false,
                                HubName: "",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    }
                ]
            },
            {
                Name: "Jorge",
                Role: "ManagementManager",
                Hub: true,
                HubName: "Bradesco Prime II Bras�lia",
                Function: { ID: 2, ParentID: 1 },
                Subordinates: [
                    {
                        Name: "Luana",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime II Bras�lia",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Isabela",
                                Role: "Assistant",
                                Hub: true,
                                HubName: "Bradesco Prime II Bras�lia",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "T�nia",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime II Bras�lia",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Julia",
                                Role: "Assistant",
                                Hub: true,
                                HubName: "Bradesco Prime II Bras�lia",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "Vitor",
                        Role: "RelationshipManager",
                        Hub: true,
                        HubName: "Bradesco Prime II Bras�lia",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: []
                    }
                ]
            },
            {
                Name: "Jorge",
                Role: "ManagementManager",
                Hub: false,
                HubName: "",
                Function: { ID: 2, ParentID: 1 },
                Subordinates: [
                    {
                        Name: "Luana",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "",
                                Role: "Assistant",
                                Hub: false,
                                HubName: "",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "T�nia",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Julia",
                                Role: "Assistant",
                                Hub: false,
                                HubName: "",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    },
                    {
                        Name: "Vitor",
                        Role: "RelationshipManager",
                        Hub: false,
                        HubName: "",
                        Function: { ID: 3, ParentID: 2 },
                        Subordinates: [
                            {
                                Name: "Kevin",
                                Role: "Assistant",
                                Hub: false,
                                HubName: "",
                                Function: { ID: 4, ParentID: 3 }
                            }
                        ]
                    }
                ]
            },
            {
                Name: "Matheus",
                Role: "Desenvolvedor",
                Function: { ID: 5, ParentID: 1 }
            }
        ]
    };

    const container = $('#tree-container');
    const stage = new Konva.Stage({
        container: 'tree-container',
        width: container.clientWidth,
        height: container.clientHeight,
        draggable: true
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    const occupiedPositions = new Map();

    function checkCollision(x, y, level) {
        const key = `${level}-${x.toFixed(0)}`;
        if (occupiedPositions.has(key)) {
            const existingY = occupiedPositions.get(key);
            if (Math.abs(existingY - y) < config.nodeHeight + 20) {
                return true;
            }
        }
        occupiedPositions.set(key, y);
        return false;
    }

    function checkCollisionHorizontal(x, y, level) {
        const key = `${level}-${y.toFixed(0)}`;
        if (occupiedPositions.has(key)) {
            const existingX = occupiedPositions.get(key);
            if (Math.abs(existingX - x) < config.nodeWidth + 20) {
                return true;
            }
        }
        occupiedPositions.set(key, x);
        return false;
    }

    function createAddButton(parentGroup, parentX, parentY, parentWidth, parentHeight, onClick, position = 'bottom') {
        const buttonGroup = new Konva.Group({ draggable: false, name: 'add-employee-button' });

        let buttonX, buttonY, linePoints;

        if (position === 'left') {
            buttonX = parentX - config.addButton.size - 30;
            buttonY = parentY + parentHeight / 2;

            linePoints = [
                parentX, buttonY,
                buttonX + config.addButton.size - 10, buttonY
            ];
        } else {
            buttonX = parentX + parentWidth / 2;
            buttonY = parentY + parentHeight + config.addButton.lineLength;

            linePoints = [
                buttonX, parentY + parentHeight,
                buttonX, buttonY - config.addButton.size / 2
            ];
        }

        const line = new Konva.Line({
            points: linePoints,
            stroke: config.lineColor,
            strokeWidth: config.lineWidth,
            lineCap: 'round'
        });

        const circle = new Konva.Circle({
            x: buttonX,
            y: buttonY,
            radius: config.addButton.size / 2,
            fill: config.addButton.backGround.natural,
            stroke: config.addButton.strokeColor,
            strokeWidth: 1,

        });

        const plusIcon = new Konva.Text({
            x: buttonX - 9,
            y: buttonY - 10,
            text: config.addButton.icon.text,
            fontFamily: config.addButton.icon.fontFamily,
            fontSize: config.addButton.icon.fontSize,
            fill: config.addButton.icon.fill,
            align: config.addButton.icon.align
        });

        buttonGroup.add(line);
        buttonGroup.add(circle);
        buttonGroup.add(plusIcon);

        buttonGroup.on('mouseenter', () => {
            stage.container().style.cursor = 'pointer';
            circle.fill(config.addButton.backGround.hover);
            layer.batchDraw();
        });

        buttonGroup.on('mouseleave', () => {
            stage.container().style.cursor = 'move';
            circle.fill(config.addButton.color);
            layer.batchDraw();
        });

        buttonGroup.on('click', (e) => {
            e.cancelBubble = true;
            openAddEmployeeModal(onClick);
        });

        layer.add(buttonGroup);
        return buttonGroup;
    }

    function openAddEmployeeModal(onConfirm) {
        if (confirm("Deseja adicionar um novo funcion�rio?")) {
            onConfirm();
        }
    }

    function openFillPositionWindow() {
        $('#fill-position-window').remove();

        const fillWindow = $(`
            <div id="fill-position-window">
                <label for="candidateSelect" class="noSelect">Selecione um candidato:</label>
                <select class="form-select" id="candidateSelect">
                    <option value="">-- Selecione --</option>
                </select>

                <div class="d-flex justify-content-between mt-3">
                    <button type="button" class="btn btn-success" id="confirmButton" disabled><i class="bi bi-check"></i></button>
                    <button type="button" class="btn btn-danger" id="cancelButton"><i class="bi bi-x"></i></button>
                </div>
            </div>
        `);

        $('#container').append(fillWindow);

        $('#fill-position-window').toggle();

        const candidateSelect = $('#candidateSelect');
        const confirmButton = $('#confirmButton');
        const cancelButton = $('#cancelButton');

        const candidates = ['Maria Silva', 'John Doe', 'Anna Smith'];

        candidates.forEach(name => {
            candidateSelect.append(`<option value="${name}">${name}</option>`);
        });

        candidateSelect.on('change', () => {
            confirmButton.prop('disabled', candidateSelect.val() === "");
        });

        cancelButton.on('click', () => {
            $('#fill-position-window').remove();
        });

        confirmButton.on('click', () => {
            alert('Confirmed: ' + candidateSelect.val());
            $('#fill-position-window').remove();
        });
        $('#fill-position-window').draggable({
            containment: '#container',
            scroll: false,
            snap: true,
            snapMode: 'inner',
            snapTolerance: 20
        });
    }

    function createEmployeeCard(employee, level) {
        const group = new Konva.Group({
            draggable: false
        });

        const isVacant = employee.Role === "Empty" || !employee.Name;
        const cardColor = isVacant ? config.card.isVacant.fill : config.card.fill[employee.Role] || config.card.fill.Diff;

        const rect = new Konva.Rect({
            width: config.nodeWidth,
            height: config.nodeHeight,
            fill: cardColor,
            stroke: '#ecf0f1',
            strokeWidth: 2,
            cornerRadius: 4,
            shadowColor: 'black',
            shadowBlur: 5,
            shadowOpacity: 0.2,
            perfectDrawEnabled: false,
            name: 'card-rect'
        });

        const text = new Konva.Text({
            text: isVacant ? config.card.isVacant.text : `${employee.Name}\n${employee.Role}`,
            fontSize: 12,
            fontStyle: isVacant ? 'normal' : 'bold',
            width: config.nodeWidth,
            height: config.nodeHeight,
            align: 'center',
            verticalAlign: 'middle',
            padding: 8,
            fill: config.card.textColor
        });

        const infoButton = new Konva.Rect({
            x: config.nodeWidth / 2,
            y: 0,
            width: config.nodeWidth / 2,
            height: config.nodeHeight,
            fill: 'rgba(52, 152, 219, 0.5)',
            visible: false,
            name: 'info-button'
        });

        const infoText = new Konva.Text({
            text: 'i',
            fontSize: 20,
            fill: 'white',
            x: config.nodeWidth * 0.75 - 5,
            y: config.nodeHeight / 2 - 10,
            visible: false,
            name: 'info-text'
        });


        group.add(rect);
        group.add(text);

        if (!isVacant) {
            group.add(infoButton);
            group.add(infoText);

            infoButton.on('click', () => {
                openEmployeeModal(employee);
            });
            infoText.on('click', () => {
                openEmployeeModal(employee);
            });
        } else {
            group.on('click', () => {
                openFillPositionWindow();
            });
        }

        if (employee.Hub) {
            rect.stroke(config.isHub.strokeColor);
            group.setAttr('isHub', true);
        }

        group.on('mouseenter', () => {
            stage.container().style.cursor = 'pointer';
            rect.shadowBlur(10);
            rect.strokeWidth(3);
            infoButton.visible(true);
            infoText.visible(true);
            layer.batchDraw();
        });

        group.on('mouseleave', () => {
            stage.container().style.cursor = 'move';
            rect.shadowBlur(5);
            rect.strokeWidth(2);
            infoButton.visible(false);
            infoText.visible(false);
            layer.batchDraw();
        });

        return group;
    }

    function openEmployeeModal(employee) {
        alert(`(Modal) Informa��es sobre ${employee.Name || 'Carteira Vazia'}:\nRole: ${employee.Role}`);
    }

    function drawConnections(parentNode, childNodes) {
        if (!childNodes || childNodes.length === 0) return;

        const parentX = parentNode.x() + config.nodeWidth / 2;
        const parentY = parentNode.y() + config.nodeHeight;

        childNodes.forEach(child => {
            const childX = child.x() + config.nodeWidth / 2;
            const childY = child.y();

            const isParentHub = parentNode.getAttr('isHub') === true;
            const isChildHub = child.getAttr('isHub') === true;

            const lineColor = (isParentHub && isChildHub) ? config.isHub.strokeColor : config.lineColor;

            const line = new Konva.Line({
                points: [parentX, parentY, childX, childY],
                stroke: lineColor,
                strokeWidth: config.lineWidth,
                lineCap: 'round'
            });

            layer.add(line);
        });
    }

    function addGG() {
        orgData.Subordinates.push({
            Name: "",
            Role: "Empty",
            Subordinates: []
        });
        renderTree();
    }

    function addGR(parentNode) {
        const newGR = {
            Name: "",
            Role: "Empty",
            Subordinates: []
        };

        parentNode.Subordinates.push(newGR);

        if (parentNode.Hub) {
            newGR.Hub = true;
        }

        renderTree();
    }

    function addAS(parentNode) {
        if (parentNode.Subordinates.length === 0) {
            const newAS = {
                Name: "",
                Role: "Empty",
                Subordinates: []
            };

            if (parentNode.Hub) {
                newAS.Hub = true;
            }

            parentNode.Subordinates.push(newAS);

            renderTree();
        }
    }

    function calculateSubtreeWidth(node, level) {
        if (!node.Subordinates || node.Subordinates.length === 0) {
            return config.nodeWidth;
        }

        let totalWidth = 0;
        node.Subordinates.forEach(child => {
            totalWidth += calculateSubtreeWidth(child, level + 1) + config.minHorizontalSpacing;
        });

        if (level === 0 || (level === 1 && node.Subordinates.length < 5)) {
            totalWidth += config.minHorizontalSpacing;
        }

        return totalWidth - config.minHorizontalSpacing;
    }

    function drawTree(node, startX, y, level = 0) {
        const subtreeWidth = calculateSubtreeWidth(node, level);
        const x = startX + (subtreeWidth - config.nodeWidth) / 2;

        let adjustedY = y;
        let attempts = 0;
        while (checkCollision(x, adjustedY, level) && attempts < 10) {
            adjustedY += config.nodeHeight / 2;
            attempts++;
        }

        const nodeGroup = createEmployeeCard(node, level);
        nodeGroup.position({ x, y: adjustedY });

        if (node.Role === "ManagementManager" && node.Hub) {
            const hubText = new Konva.Text({
                text: node.HubName,
                fontSize: 22,
                fontFamily: 'Calibri',
                fill: config.isHub.strokeColor,
                width: 200,
                align: 'left',
            });

            hubText.position({
                x: config.nodeWidth + 10,
                y: (config.nodeHeight - hubText.height()) / 2
            });

            nodeGroup.add(hubText);
        }

        nodeGroup.employee = () => node;

        layer.add(nodeGroup);

        if (node.Subordinates && node.Subordinates.length > 0) {
            const children = [];
            let currentX = startX;

            node.Subordinates.forEach(child => {
                const childSubtreeWidth = calculateSubtreeWidth(child, level + 1);
                const childGroup = drawTree(child, currentX, adjustedY + config.nodeHeight + config.verticalSpacing, level + 1);
                children.push(childGroup);
                currentX += childSubtreeWidth + config.minHorizontalSpacing;
            });

            drawConnections(nodeGroup, children);
        }

        if (level === 0 && node.Function.ParentID === 0) {
            createAddButton(
                layer,
                x,
                adjustedY,
                config.nodeWidth,
                config.nodeHeight,
                () => addGG(),
                'bottom'
            );
        } else if (level === 1 && node.Role === "ManagementManager") {
            createAddButton(
                layer,
                x,
                adjustedY,
                config.nodeWidth,
                config.nodeHeight,
                () => addGR(node),
                'left'
            );
        } else if (level === 2 && (!node.Subordinates || node.Subordinates.length === 0) && node.Role === "RelationshipManager") {
            createAddButton(
                layer,
                x,
                adjustedY,
                config.nodeWidth,
                config.nodeHeight,
                () => addAS(node),
                'bottom'
            );
        }

        return nodeGroup;
    }

    function calculateSubtreeHeight(node) {
        const children = node.children || node.Subordinates || [];
        if (children.length === 0) {
            return config.nodeHeight;
        }

        let height = 0;
        for (const child of children) {
            height += calculateSubtreeHeight(child) + config.verticalSpacing;
        }

        return height - config.verticalSpacing;
    }

    function drawConnectionsHorizontal(parentCard, childCards) {
        if (!childCards || childCards.length === 0) return;

        const parentX = parentCard.x() + config.nodeWidth;
        const parentY = parentCard.y() + config.nodeHeight / 2;

        childCards.forEach(child => {
            const childX = child.x();
            const childY = child.y() + config.nodeHeight / 2;

            const isParentHub = parentCard.getAttr('isHub') === true;
            const isChildHub = child.getAttr('isHub') === true;

            const lineColor = (isParentHub && isChildHub) ? config.isHub.strokeColor : config.lineColor;

            const line = new Konva.Line({
                points: [parentX, parentY, childX, childY],
                stroke: lineColor,
                strokeWidth: config.lineWidth,
                lineCap: 'round',
                lineJoin: 'round'
            });

            layer.add(line);
        });
    }

    function drawTreeHorizontal(node, parent = null, level = 0, posY = 0, posX = 0) {
        if (!node) return;

        const card = createEmployeeCard(node, level);
        const adjustedX = posX;
        let adjustedY = posY;

        while (checkCollisionHorizontal(adjustedX, adjustedY, level)) {
            adjustedY += config.nodeHeight + config.verticalSpacing;
        }

        card.position({ x: adjustedX, y: adjustedY });
        layer.add(card);

        if (node.Role === "ManagementManager" && node.Hub) {
            const cardPos = card.getAbsolutePosition();

            const hubText = new Konva.Text({
                text: node.HubName,
                fontSize: 22,
                fontFamily: 'Calibri',
                fill: config.isHub.strokeColor,
                align: 'center',
                width: config.nodeWidth
            });

            hubText.position({
                x: 0,
                y: -50
            });

            card.add(hubText);
        }

        if (parent && parent.card) {
            drawConnectionsHorizontal(parent.card, [card]);
        }

        const children = node.children || node.Subordinates || [];
        const spacing = config.nodeWidth * 2;

        let totalChildHeight = 0;
        const childrenHeights = [];

        for (const child of children) {
            const h = calculateSubtreeHeight(child);
            childrenHeights.push(h);
            totalChildHeight += h;
        }
        totalChildHeight += (children.length - 1.7) * config.verticalSpacing;

        let childY = adjustedY - totalChildHeight / 2;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            drawTreeHorizontal(
                child,
                { node, card },
                level + 1,
                childY,
                adjustedX + spacing
            );
            childY += childrenHeights[i] + config.verticalSpacing;
        }

        if (level === 0 && node.Function?.ParentID === 0) {
            createAddButton(layer, adjustedX, adjustedY, config.nodeWidth, config.nodeHeight,
                () => addGG(), 'right');
        }
        else if (level === 1 && node.Role === "ManagementManager") {
            createAddButton(layer, adjustedX, adjustedY, config.nodeWidth, config.nodeHeight,
                () => addGR(node), 'right');
        }
        else if (level === 2 && node.Role === "RelationshipManager" &&
            (!node.Subordinates || node.Subordinates.length === 0)) {
            createAddButton(layer, adjustedX, adjustedY, config.nodeWidth, config.nodeHeight,
                () => addAS(node), 'right');
        }
    }

    function centerContent() {
        stage.scale({ x: 1, y: 1 });
        layer.position({ x: 0, y: 0 });

        layer.batchDraw();

        const contentBounds = layer.getClientRect();

        const stageCenterX = stage.width() / 2;
        const stageCenterY = stage.height() / 2;

        const contentCenterX = contentBounds.x + contentBounds.width / 4;
        const contentCenterY = contentBounds.y + contentBounds.height / 4;

        const offsetX = stageCenterX - contentCenterX;
        const offsetY = stageCenterY - contentCenterY;

        layer.position({
            x: offsetX,
            y: offsetY
        });

        fitStageToTree();

        layer.batchDraw();
    }

    function fitStageToTree() {
        const treeBounds = layer.getClientRect();
        const scale = Math.min(
            (stage.width() - 100) / treeBounds.width,
            (stage.height() - 100) / treeBounds.height
        );

        stage.scale({ x: scale, y: scale });
        stage.position({
            x: (stage.width() - treeBounds.width * scale) / 2 - treeBounds.x * scale,
            y: 20
        });
        stage.batchDraw();
    }

    function zoom(factor) {
        const oldScale = stage.scaleX();
        const newScale = oldScale * factor;
        const pointer = stage.getPointerPosition();

        if (!pointer) {
            stage.scale({ x: newScale, y: newScale });
            stage.batchDraw();
            return;
        }

        const mousePointTo = {
            x: (pointer.x - stage.x()) / oldScale,
            y: (pointer.y - stage.y()) / oldScale,
        };

        stage.scale({ x: newScale, y: newScale });
        stage.position({
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        });
        stage.batchDraw();
    }

    function updateStageSize() {
        stage.width(container.clientWidth);
        stage.height(container.clientHeight);
        renderTree();
    }

    function renderTree() {
        layer.destroyChildren();
        occupiedPositions.clear();

        const stageWidth = stage.width();
        const stageHeight = stage.height();

        const startX = stageWidth / 2;
        const startY = stageHeight / 2;

        if (config.orientation === 'horizontal') {
            drawTree(orgData, startX, startY);
        } else if (config.orientation === 'vertical') {
            drawTreeHorizontal(orgData, null, 0, startX, startY);
        }

        centerContent();
        stage.container().style.cursor = 'move';

        layer.batchDraw();
        window.konvaInitialized = true;
    }

    stage.on('wheel', (e) => {
        e.evt.preventDefault();
        zoom(e.evt.deltaY < 0 ? 1.05 : 0.95);
    });

    window.addEventListener('resize', updateStageSize);
    if (window.konvaStage) {
        window.konvaStage.destroy();
    }

    renderTree();
};

window.toggleFullscreen = function () {
    const el = document.getElementById('container');
    if (!document.fullscreenElement) {
        el.requestFullscreen().then(updateStageSize);
    } else {
        document.exitFullscreen().then(updateStageSize);
    }
};

window.toggleOrientation = function () {
    config.orientation = config.orientation === 'horizontal' ? 'vertical' : 'horizontal';
    renderTree();
};

window.zoom = function (factor) {
    const oldScale = stage.scaleX();
    const newScale = oldScale * factor;
    const pointer = stage.getPointerPosition();

    if (!pointer) {
        stage.scale({ x: newScale, y: newScale });
        stage.batchDraw();
        return;
    }

    const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
    };

    stage.scale({ x: newScale, y: newScale });
    stage.position({
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
    });
    stage.batchDraw();
};