import requests , json, itertools
from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse

class TranslateView(TemplateView):
    
    template_name = "test.html"
    
    
def trans(request):
    try:
        data = json.loads(request.body)
        print(data)
        if data.get("source_lang") == "한국어":
            source_lang = 'ko'
            target_lang = 'en'
        else:
            source_lang = 'en'
            target_lang = 'ko'
        header = {"x-api-key":"a6007323cc1cffaa887dc6624f1d0a76","Content-Type":"application/json; charset=utf-8"}
        data_raw = {"q": f"{data.get('input')}","source_lang": f"{source_lang}","target_lang": f"{target_lang}",}
        request_post = requests.post(
            f"https://9b605f89-94d2-47a0-a61b-92547abb3017.api.kr-central-1.kakaoi.io/ai/translation/d6450e9fca05420abfad559feb086918",
            headers=header, data=json.dumps(data_raw)
        )
        result = request_post.json()
        print(result)
        output = result.get("output")
        text = ''
        for i in output:
            for j in i:
                text += j

        print(text)
        return JsonResponse({"output":text},status=200)
    except Exception as e:
        return JsonResponse({"messge":str(e)},status=500)