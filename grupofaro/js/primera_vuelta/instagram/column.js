async function getData() {
    const [categoriesResponse, dataResponse] = await Promise.all([
        fetch('../../../data/barchart/primera_vuelta/instagram/categories.json'),
        fetch('../../../data/barchart/primera_vuelta/instagram/data.json')
    ]);
    const categories = await categoriesResponse.json();
    const data = await dataResponse.json();
    return [categories, data];
}


getData().then(([categories, data]) => {

    let chartCategories = [];
    for (let i = 0; i < categories.length; i++) {
        chartCategories.push(categories[i].name);
    }
    $(function() {
        $('#container').highcharts({
            chart: {
                type: 'bar',
            },
            title: {
                text: 'Elecciones presidenciales 2021 (1era vuelta)'
            },
            subtitle: {
                text: 'Gasto estimado electoral por partido político en Instagram  '
            },
            xAxis: {
                categories: chartCategories,
                title: {
                    text: 'Partido político'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Gasto estimado ($)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.category + '</b> <br><b>' +
                        this.point.series.name + ' ' + new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0
                        }).format(this.point.y) + '</b>';
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            exporting: {

                buttons: {
                    contextButton: {
                        enabled: true,
                        menuItems: [{
                                text: 'Descargar PNG',
                                onclick() { this.exportChart({ type: 'image/png' }); }
                            },
                            {
                                text: 'Descargar JPEG',
                                onclick() { this.exportChart({ type: 'image/jpeg' }); }
                            },
                            {
                                text: 'Descargar PDF',
                                onclick() { this.exportChart({ type: 'application/pdf' }); }
                            },
                            {
                                text: 'Descargar CSV',
                                onclick() { this.downloadCSV(); }
                            },
                            {
                                text: 'Descargar XLSX',
                                onclick() { this.downloadXLSX(); }
                            }

                        ]
                    }
                },
                xlsx: {
                    workbook: {
                        fileProperties: {
                            Author: "grupofaro",
                            Company: "grupofaro",
                            CreatedDate: new Date(Date.now())
                        }
                    }
                }
            },
            series: data
        })
    })
}).catch(error => {
    console.log(error);
});